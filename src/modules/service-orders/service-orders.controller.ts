/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ServiceOrdersService } from './service-orders.service'; 
import { CreateServiceOrderDto } from './dto/create-service-order.dto'; 
import { UpdateServiceOrderDto } from './dto/update-service-order.dto'; 

@Controller('serviceOrders')
export class ServiceOrdersController {
  constructor(private readonly serviceOrdersService: ServiceOrdersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createServiceOrderDto: CreateServiceOrderDto) {
    return this.serviceOrdersService.create(createServiceOrderDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.serviceOrdersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceOrdersService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceOrderDto: UpdateServiceOrderDto) {
    return this.serviceOrdersService.update(id, updateServiceOrderDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceOrdersService.remove(id);
  }
}
