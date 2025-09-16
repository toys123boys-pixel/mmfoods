import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

// @route   GET /api/orders
// @desc    Get all orders (Admin only)
// @access  Private
router.get('/', adminAuth, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const query = {};

    // Apply status filter
    if (status) {
      query.status = status;
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 }
    };

    const orders = await Order.find(query)
      .populate('items.product')
      .sort(options.sort)
      .limit(options.limit * 1)
      .skip((options.page - 1) * options.limit);

    const total = await Order.countDocuments(query);

    res.json({
      orders,
      totalPages: Math.ceil(total / options.limit),
      currentPage: options.page,
      total
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Server error while fetching orders' });
  }
});

// @route   GET /api/orders/:id
// @desc    Get single order
// @access  Private (Admin only)
router.get('/:id', adminAuth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ order });
  } catch (error) {
    console.error('Get order error:', error);
    if (error.name === 'CastError') {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(500).json({ message: 'Server error while fetching order' });
  }
});

// @route   POST /api/orders
// @desc    Create new order
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { items, total, customerName, customerEmail, customerPhone, address } = req.body;

    // Validate required fields
    if (!items || !items.length || !total || !customerName || !customerEmail || !customerPhone || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Verify products exist and calculate total
    let calculatedTotal = 0;
    const validatedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      
      if (!product || !product.isActive) {
        return res.status(400).json({ message: `Product not found: ${item.product}` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }

      calculatedTotal += product.price * item.quantity;
      validatedItems.push({
        product: product._id,
        quantity: item.quantity
      });

      // Update product stock
      product.stock -= item.quantity;
      await product.save();
    }

    // Verify total matches calculated total (with small margin for floating point errors)
    if (Math.abs(calculatedTotal - total) > 0.01) {
      return res.status(400).json({ message: 'Order total mismatch' });
    }

    const order = new Order({
      items: validatedItems,
      total: calculatedTotal,
      customerName,
      customerEmail,
      customerPhone,
      address
    });

    await order.save();
    await order.populate('items.product');

    res.status(201).json({
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    console.error('Create order error:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error while creating order' });
  }
});

// @route   PUT /api/orders/:id/status
// @desc    Update order status
// @access  Private (Admin only)
router.put('/:id/status', adminAuth, async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'Status is required' });
    }

    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const order = await Order.findById(req.params.id).populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // If cancelling order, restore product stock
    if (status === 'cancelled' && order.status !== 'cancelled') {
      for (const item of order.items) {
        const product = await Product.findById(item.product._id);
        if (product) {
          product.stock += item.quantity;
          await product.save();
        }
      }
    }

    order.status = status;
    await order.save();

    res.json({
      message: 'Order status updated successfully',
      order
    });
  } catch (error) {
    console.error('Update order status error:', error);
    if (error.name === 'CastError') {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(500).json({ message: 'Server error while updating order status' });
  }
});

export default router;