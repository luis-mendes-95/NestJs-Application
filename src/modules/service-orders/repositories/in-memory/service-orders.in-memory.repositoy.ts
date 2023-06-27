/* eslint-disable prettier/prettier */
import { plainToInstance } from 'class-transformer';
import { CreateServiceOrderDto } from '../../dto/create-service-order.dto';
import { UpdateServiceOrderDto } from '../../dto/update-service-order.dto';
import { ServiceOrder } from '../../entities/service-order.entity';
import { ServiceOrdersRepository } from '../service-orders.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceOrdersInMemoryRepository implements ServiceOrdersRepository {
  private database: ServiceOrder[] = [];
  create(data: CreateServiceOrderDto): ServiceOrder | Promise<ServiceOrder> {
    const newServiceOrder = new ServiceOrder();
    Object.assign(newServiceOrder, {
      ...data,
    });

    this.database.push(newServiceOrder);

    return plainToInstance(ServiceOrder, newServiceOrder);
  }

  findAll(): ServiceOrder[] | Promise<ServiceOrder[]> {
    return plainToInstance(ServiceOrder, this.database);
  }
  findOne(id: string): ServiceOrder | Promise<ServiceOrder> {
    const serviceOrder = this.database.find((serviceOrder) => serviceOrder.id === id);
    return plainToInstance(ServiceOrder, serviceOrder);
  }

  update(id: string, data: UpdateServiceOrderDto): ServiceOrder | Promise<ServiceOrder> {
    const serviceOrderIndex = this.database.findIndex((serviceOrder) => serviceOrder.id === id);
    this.database[serviceOrderIndex] = {
      ...this.database[serviceOrderIndex],
      ...data,
    };

    return plainToInstance(ServiceOrder, this.database[serviceOrderIndex]);
  }
  delete(id: string): void | Promise<void> {
    const serviceOrderIndex = this.database.findIndex((serviceOrder) => serviceOrder.id === id);
    this.database.splice(serviceOrderIndex, 1);
  }
}
