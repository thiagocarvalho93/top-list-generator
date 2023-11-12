import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { InvalidRelationError } from 'src/errors/invalid-relation-error';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const { title, author_id, category_id } = createPostDto;
    await this._checkIfExists(author_id, 'user');
    await this._checkIfExists(category_id, 'category');

    return this.prismaService.post.create({
      data: {
        title,
        author_id,
        category_id,
      },
    });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    return this.prismaService.post.findFirstOrThrow({
      where: { id },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const { author_id, category_id } = updatePostDto;
    if (author_id) {
      await this._checkIfExists(author_id, 'user');
    }

    if (category_id) {
      await this._checkIfExists(category_id, 'category');
    }

    return this.prismaService.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }

  async _checkIfExists(id: number, entity: string) {
    const count = await this.prismaService[entity].count({
      where: { id },
    });

    if (count === 0) {
      throw new InvalidRelationError(`${entity} ${id} not found.`);
    }
  }
}
