/* eslint-disable prettier/prettier */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServiceOrderDto } from './create-service-order.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcryptjs';

export class UpdateServiceOrderDto extends PartialType(CreateServiceOrderDto) {}

// export class UpdateServiceOrderDto {
//   @ApiProperty({
//     description: 'Nome do usuário',
//     type: String,
//     default: 'Felipe Silva',
//     required: false,
//   })
//   @IsString()
//   @IsNotEmpty()
//   @IsOptional()
//   name: string;

//   @ApiProperty()
//   @IsEmail()
//   @IsNotEmpty()
//   @IsOptional()
//   email: string;

//   @ApiProperty()
//   @IsString()
//   @IsNotEmpty()
//   @MinLength(8)
//   @IsOptional()
//   @Transform(({ value }: { value: string }) => hashSync(value, 10), {
//     groups: ['transform'],
//   })
//   password: string;
// }
