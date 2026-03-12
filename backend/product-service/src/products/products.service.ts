import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductDto } from './dto/create-products.dto';
import { Product } from './product.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {

  private products: Product[] = [];

  create(dto: CreateProductDto) {

    const product: Product = {
      id: uuid(),
      ...dto,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.products.push(product);

    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {

    const product = this.products.find(p => p.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  update(id: string, dto: Partial<CreateProductDto>) {

    const product = this.findOne(id);

    Object.assign(product, dto, { updatedAt: new Date() });

    return product;
  }

  remove(id: string) {

    const index = this.products.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    return this.products.splice(index, 1);
  }
}
