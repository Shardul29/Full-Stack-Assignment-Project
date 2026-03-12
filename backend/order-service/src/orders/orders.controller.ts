import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {

  constructor(private readonly ordersService: OrdersService) {}

  // Create Order
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  // Get All Orders
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  // Get Orders with Products
  @Get('with-products')
  findOrdersWithProducts() {
    return this.ordersService.findOrdersWithProducts();
  }

}
