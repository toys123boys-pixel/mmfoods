import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1']
  }
});

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  total: {
    type: Number,
    required: [true, 'Order total is required'],
    min: [0, 'Total cannot be negative']
  },
  status: {
    type: String,
    required: true,
    enum: ['processing', 'shipped', 'inTransit', 'Delivered'],
    default: 'pending'
  },
  customerName: {
    type: String,
    required: [true, 'Customer name is required'],
    trim: true,
    maxlength: [100, 'Customer name cannot exceed 100 characters']
  },
  customerEmail: {
    type: String,
    required: [true, 'Customer email is required'],
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  customerPhone: {
    type: String,
    required: [true, 'Customer phone is required'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Customer address is required'],
    trim: true,
    maxlength: [500, 'Address cannot exceed 500 characters']
  }
}, {
  timestamps: true
});

// Index for better query performance
orderSchema.index({ status: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ customerEmail: 1 });

const Order = mongoose.model('Order', orderSchema);

export default Order;