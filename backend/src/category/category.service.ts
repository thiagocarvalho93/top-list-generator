import { HttpCode, Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  create({ description }) {
    return this.prismaService.category.create({
      data: { description },
    });
  }

  findAll({ description }) {
    return this.prismaService.category.findMany({
      where: { description: { contains: description } },
    });
  }

  findOne(id: number) {
    return this.prismaService.category.findFirstOrThrow({
      where: { id },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  @HttpCode(204)
  remove(id: number) {
    return this.prismaService.category.delete({
      where: { id },
    });
  }
}
