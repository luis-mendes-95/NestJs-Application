/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
import { ServiceOrdersRepository } from './repositories/service-orders.repository';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'node:fs';

@Injectable()
export class ServiceOrdersService {

  constructor(private serviceOrdersRepository: ServiceOrdersRepository) {}

  async create(createServiceOrderDto: CreateServiceOrderDto) {
    const serviceOrder = await this.serviceOrdersRepository.create(
      createServiceOrderDto,
    );

    return serviceOrder;
  }

  async findAll() {
    const serviceOrders = await this.serviceOrdersRepository.findAll();
    return serviceOrders;
  }

  async findOne(id: string) {
    const serviceOrder = await this.serviceOrdersRepository.findOne(id);
    if (!serviceOrder) {
      throw new NotFoundException('Service Order not found !');
    }
    return serviceOrder;
  }

  async update(id: string, updateServiceOrderDto: UpdateServiceOrderDto) {
    const serviceOrder = await this.serviceOrdersRepository.update(
      id,
      updateServiceOrderDto,
    );
    return serviceOrder;
  }

  async remove(id: string) {
    await this.serviceOrdersRepository.delete(id);
    return;
  }

  async uploadMockup(mockupImg: Express.Multer.File, serviceOrderId: string) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    const uploadMockup = await cloudinary.uploader.upload(
      mockupImg.path,
      { resource_type: 'image' },
      (error, result) => {
        return result;
      },
    );

    const updateServiceOrder = await this.serviceOrdersRepository.update(
      serviceOrderId,
      { mockupImg: uploadMockup.secure_url },
    );

    unlink(mockupImg.path, (error) => {
      if (error) {
        console.log(error);
      }
    });

    return updateServiceOrder;
  }
  
}
