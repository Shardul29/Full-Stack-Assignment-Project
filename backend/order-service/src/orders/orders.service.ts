import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrdersService {

  private orders: Order[] = [];

  // Create Order
  async create(dto: CreateOrderDto) {


    const productResponse = await axios.get(
      `http://localhost:3001/products/${dto.productId}`
    );

    const product = productResponse.data;

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    // total price calculate 
    const totalPrice = product.price * dto.quantity;

    // order object create 
    const order: Order = {
      id: uuid(),
      productId: dto.productId,
      quantity: dto.quantity,
      totalPrice,
      createdAt: new Date()
    };

    this.orders.push(order);

    return order;
  }

  // Get All Orders
  findAll() {
    return this.orders;
  }

  // Orders with Product Data
  async findOrdersWithProducts() {

  const result: any[] = [];

  for (const order of this.orders) {

    const productResponse = await axios.get(
      `http://localhost:3001/products/${order.productId}`
    );

    result.push({
      ...order,
      product: productResponse.data
    });
  }

  return result;
}


}
