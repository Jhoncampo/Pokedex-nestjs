import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Register extends Document {
  @Prop({
    min: 2,
  })
  fulName: string;
  @Prop({
    unique: true,
    index: true,
  })
  email: string;
  @Prop({
    min: 6,
  })
  password: string;
}

export const RegisterSchema = SchemaFactory.createForClass(Register);
