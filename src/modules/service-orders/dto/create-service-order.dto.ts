/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// data tranfer object
export class CreateServiceOrderDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'L Mendes',
  })
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  client: string;

  @ApiProperty()
  @IsNotEmpty()
  product: string;

  @ApiProperty()
  @IsNotEmpty()
  printType: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  files: string;

  @ApiProperty()
  mockupImg: string;

  @ApiProperty()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  cost: string;

  @ApiProperty()
  @IsNotEmpty()
  price: string;

  @ApiProperty()
  @IsNotEmpty()
  margin: string;


}
