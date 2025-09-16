import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetchOrders, updateOrderStatus } from '../../store/slices/ordersSlice';
import { formatCurrency } from '../../lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const AdminOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders() as any);
  }, [dispatch]);

  const handleStatusChange = async (orderId: string, status: string) => {
    try {
      await dispatch(updateOrderStatus({ id: orderId, status }) as any).unwrap();
    } catch (error) {
      alert('Failed to update order status');
    }
  };
  console.log("Dis", orders)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-purple-600 bg-purple-100';
      case 'inTransit': return 'text-yellow-600 bg-yellow-100';
      case 'Delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-amber-900">Orders</h1>
        <p className="text-gray-600">Manage customer orders</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order._id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Order #{order._id.slice(-6)}</CardTitle>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Customer Information</h4>
                    <p><strong>Name:</strong> {order.customerName}</p>
                    <p><strong>Email:</strong> {order.customerEmail}</p>
                    <p><strong>Phone:</strong> {order.customerPhone}</p>
                    <p><strong>Address:</strong> {order.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Order Details</h4>
                    <p><strong>Total:</strong> {formatCurrency(order.total)}</p>
                    <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-1">Update Status</label>
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Items</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2">
                        <div>
                          <span className="font-medium">{item.product.name}</span>
                          <span className="text-gray-600 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="font-medium">
                          {formatCurrency(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {orders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No orders found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;