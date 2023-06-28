/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ServiceOrdersRepository } from '../service-orders.repository';
import { CreateServiceOrderDto } from '../../dto/create-service-order.dto';
import { UpdateServiceOrderDto } from '../../dto/update-service-order.dto';
import { ServiceOrder } from '../../entities/service-order.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ServiceOrdersPrismaRepository implements ServiceOrdersRepository {
  constructor(private prisma: PrismaService) {}

  upload(mockup: Express.Multer.File, files: Express.Multer.File, serviceOrderId: string): Promise<ServiceOrder> {
    throw new Error('Method not implemented.');
  }
  
  async create(data: CreateServiceOrderDto): Promise<ServiceOrder> {
    const serviceOrder = new ServiceOrder();
    Object.assign(serviceOrder, {
      ...data,
    });

    const newServiceOrder = await this.prisma.serviceOrder.create({
      data: { ...serviceOrder },
    });

    return plainToInstance(ServiceOrder, newServiceOrder);
  }
  async findAll(): Promise<ServiceOrder[]> {
    const serviceOrders = await this.prisma.serviceOrder.findMany();
    return plainToInstance(ServiceOrder, serviceOrders);
  }
  async findOne(id: string): Promise<ServiceOrder> {
    const serviceOrder = await this.prisma.serviceOrder.findUnique({
      where: { id },
    });
    return plainToInstance(ServiceOrder, serviceOrder);
  }
  async update(id: string, data: UpdateServiceOrderDto): Promise<ServiceOrder> {
    const serviceOrder = await this.prisma.serviceOrder.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(ServiceOrder, serviceOrder);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.serviceOrder.delete({
      where: { id },
    });
  }
}
