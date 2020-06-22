import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  qty: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
