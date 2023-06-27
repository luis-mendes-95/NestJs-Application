/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceOrderDto } from './dto/create-service-order.dto'; 
import { UpdateServiceOrderDto } from './dto/update-service-order.dto'; 
import { ServiceOrdersRepository } from './repositories/service-orders.repository';

@Injectable()
export class ServiceOrdersService {
  constructor(private serviceOrdersRepository: ServiceOrdersRepository) {}

  create(createServiceOrderDto: CreateServiceOrderDto) {
    return this.serviceOrdersRepository.create(createServiceOrderDto);
  }

  findAll() {
    return this.serviceOrdersRepository.findAll();
  }

  findOne(id: string) {
    const findServiceOrder = this.serviceOrdersRepository.findOne(id);
    if (!findServiceOrder) {
      throw new NotFoundException('service order not found');
    }
    return this.serviceOrdersRepository.findOne(id);
  }

  update(id: string, updateServiceOrderDto: UpdateServiceOrderDto) {
    const findServiceOrder = this.serviceOrdersRepository.findOne(id);
    if (!findServiceOrder) {
      throw new NotFoundException('service order not found');
    }
    return this.serviceOrdersRepository.update(id, updateServiceOrderDto);
  }

  remove(id: string) {
    const findServiceOrder = this.serviceOrdersRepository.findOne(id);
    if (!findServiceOrder) {
      throw new NotFoundException('service order not found');
    }
    return this.serviceOrdersRepository.delete(id);
  }
}
