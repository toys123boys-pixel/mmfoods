export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  _id: string;
  items: {
    product: Product;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  createdAt: string;
}

export interface User {
  _id: string;
  email: string;
  isAdmin: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}