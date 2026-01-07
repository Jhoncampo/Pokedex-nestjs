import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Register, RegisterSchema } from './entities/register.entity';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Register.name,
        schema: RegisterSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class RegisterModule {}
