import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  create(createCategoryDto: CreateCategoryDto) {
    return 'rebase0This action adds a new category';
  }

  findAll() {
    return `rebase1This action returns all category123`;
  }

  findOne(id: number) {
    return `rebase1This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `rebase2This action updates a #${id} category`;
  }

  remove(id: number) {
    return `rebase2This action removes a #${id} category`;
  }
}
