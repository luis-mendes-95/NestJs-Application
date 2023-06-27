/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ServiceOrdersController } from './service-orders.controller'; 
import { ServiceOrdersService } from './service-orders.service'; 
import { ServiceOrdersRepository } from './repositories/service-orders.repository';  
import { ServiceOrdersPrismaRepository } from '../service-orders/repositories/prisma/service-orders.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ServiceOrdersController],
  providers: [
    ServiceOrdersService,
    PrismaService,
    { provide: ServiceOrdersRepository, useClass: ServiceOrdersPrismaRepository }
  ],
})

export class ServiceOrdersModule {}
