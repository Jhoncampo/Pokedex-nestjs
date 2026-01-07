import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Register } from './entities/register.entity';
import { Model } from 'mongoose';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(Register.name)
    private readonly registerModel: Model<Register>,
  ) {}
  async create(createRegisterDto: CreateRegisterDto) {
    try {
      console.log("Insertar Dto: ",createRegisterDto)

      const register = await this.registerModel.create(createRegisterDto);
      console.log("Insertado: ",register)
      return register;
    } catch (error) {
      console.log("This a error: ",error)
      this.handleExceptions(error);
    }
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(email: string) {
    console.log("This an email: ", email)
    try {
      const res = this.registerModel.findOne({email: email})
      return res
    } catch (error) {
      
    }
    return `This action returns a #${email} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exist in db  ${JSON.stringify(error.keyValue)}`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException("Can't updated - check server logs");
  }
}
