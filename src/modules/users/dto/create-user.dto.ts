/* eslint-disable prettier/prettier */
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({value}:{value:string}) => hashSync(value),{
    groups: ['transform'],
  })
  password: string;
  
}
