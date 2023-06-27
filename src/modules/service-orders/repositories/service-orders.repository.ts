/* eslint-disable prettier/prettier */

import { CreateServiceOrderDto } from "../dto/create-service-order.dto" 
import { UpdateServiceOrderDto } from "../dto/update-service-order.dto" 
import { ServiceOrder } from "../entities/service-order.entity" 

export abstract class ServiceOrdersRepository {
    abstract create(data: CreateServiceOrderDto): Promise<ServiceOrder> | ServiceOrder;
    abstract findAll(): Promise<ServiceOrder[]> | ServiceOrder[];
    abstract findOne(id: string): Promise<ServiceOrder | undefined> | ServiceOrder | undefined;
    abstract update(id: string, data: UpdateServiceOrderDto): Promise<ServiceOrder> | ServiceOrder;
    abstract delete(id: string): Promise<void> | void;
}