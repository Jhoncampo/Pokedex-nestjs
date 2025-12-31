import { IsString, MinLength } from 'class-validator';

export class CreateRegisterDto {
  @IsString()
  @MinLength(2)
  fullName: string;
  @IsString()
  email: string;
  @IsString()
  @MinLength(6)
  password: string;
}
