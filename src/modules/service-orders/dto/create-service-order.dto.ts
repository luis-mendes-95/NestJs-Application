/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";


export class CreateServiceOrderDto {
  @IsString()
  @IsNotEmpty()
  Date: string;
  client: string;
  product: string;
  printType: string;
  description: string;
  files: string;
  mockupImg: string;
  status: string;
  cost: string;
  price: string;
  margin: string;
}
