/* eslint-disable prettier/prettier */

import { CreateServiceOrderDto } from '../../dto/create-service-order.dto'; 
import { ServiceOrder } from '../../entities/service-order.entity'; 
import { ServiceOrdersRepository } from '../service-orders.repository'; 
import { UpdateServiceOrderDto } from '../../dto/update-service-order.dto'; 
import { serviceOrders } from 'src/database/db';

export class ServiceOrdersInMemoryRepository implements ServiceOrdersRepository {

  create(data: CreateServiceOrderDto): ServiceOrder | Promise<ServiceOrder> {
    const newServiceOrder = new ServiceOrder();
    Object.assign(newServiceOrder, {
      ...data,
    });
    serviceOrders.push(newServiceOrder);
    return newServiceOrder;
  }

  findAll(): ServiceOrder[] | Promise<ServiceOrder[]> {
    return serviceOrders;
  }

  findOne(id: string): ServiceOrder | Promise<ServiceOrder> {
    const serviceOrder = serviceOrders.find((serviceOrder) => serviceOrder.id === id);
    return serviceOrder;
  }

  update(id: string, data: UpdateServiceOrderDto): ServiceOrder | Promise<ServiceOrder> {
    const serviceOrderIndex = serviceOrders.findIndex((serviceOrder) => serviceOrder.id === id);
    serviceOrders[serviceOrderIndex] = { ...serviceOrders[serviceOrderIndex], ...data };
    return serviceOrders[serviceOrderIndex];
  }

  delete(id: string): void | Promise<void> {
    const serviceOrderIndex = serviceOrders.findIndex((serviceOrder) => serviceOrder.id === id);
    serviceOrders.splice(serviceOrderIndex, 1);
  }
}
