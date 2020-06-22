import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id);
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id);
  }

  async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
    const updatedItem = new this.itemModel(updateItemDto);
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true });
  }
}
