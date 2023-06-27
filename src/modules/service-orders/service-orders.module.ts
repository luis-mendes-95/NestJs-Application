/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ServiceOrdersController } from './service-orders.controller'; 
import { ServiceOrdersService } from './service-orders.service'; 
import { ServiceOrdersRepository } from './repositories/service-orders.repository';  
import { ServiceOrdersInMemoryRepository } from './repositories/in-memory/service-orders.in-memory.repository'; 

@Module({
  controllers: [ServiceOrdersController],
  providers: [
    ServiceOrdersService,
    { provide: ServiceOrdersRepository, useClass: ServiceOrdersInMemoryRepository }
  ],
})

export class ServiceOrdersModule {}
