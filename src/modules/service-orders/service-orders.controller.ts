/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ServiceOrdersService } from './service-orders.service';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import axios from "axios";
import { FilesInterceptor } from '@nestjs/platform-express';


@ApiTags('serviceOrders')
@Controller('serviceOrders')
export class ServiceOrdersController {

  constructor(private readonly serviceOrdersService: ServiceOrdersService) {}

  //CRIA UMA ORDEM DE SERVIÇO
  @Post('')
  @UseGuards(JwtAuthGuard)
  create(@Body() createServiceOrderDto: CreateServiceOrderDto) {
    return this.serviceOrdersService.create(createServiceOrderDto);
  }

  //BUSCA TODAS AS ORDENS DE SERVIÇO
  @Get('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.serviceOrdersService.findAll();
  }

  //FAZ UPLOAD DE MOCKUP DA ORDEM DE SERVIÇO
  @Patch('upload/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'mockup', maxCount: 1 }]))
  uploadMockup(
    @UploadedFiles()
    files: {
      mockup?: Express.Multer.File[];
    },
    @Param('id') id: string,
  ) {
    const { mockup } = files;

    return this.serviceOrdersService.uploadMockup(mockup[0], id);
  }

  //FAZ UPLOAD DE ARQUIVOS DE ORDEM DE SERVIÇO
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return this.serviceOrdersService.uploadFiles(files);
  }
  

  //RETORNA ORDEM DE SERVIÇO INDIVIDUAL
  @Get(':id')
  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.serviceOrdersService.findOne(id);
  }

  //ATUALIZA ORDEM DE SERVIÇO
  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateServiceOrderDto: UpdateServiceOrderDto,
  ) {
    return this.serviceOrdersService.update(id, updateServiceOrderDto);
  }

  //REMOVE ORDEM DE SERVIÇO
  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.serviceOrdersService.remove(id);
  }

  
}
