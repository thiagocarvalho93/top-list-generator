import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    const { email, name, role } = createUserDto;
    return this.prismaService.user.create({
      data: {
        email,
        name,
        role,
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany({
      include: {
        Post: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findFirstOrThrow({
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
