export interface Product {
  id?: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  minStock: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}