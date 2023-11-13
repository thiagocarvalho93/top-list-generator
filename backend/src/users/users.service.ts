import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create({ email, name, role, passwordHash }) {
    return this.prismaService.user.create({
      data: {
        email,
        name,
        role,
        passwordHash,
      },
    });
  }

  findAll({ name, email }) {
    return this.prismaService.user.findMany({
      where: {
        name: { contains: name },
        email: { contains: email },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findFirstOrThrow({
      where: { id },
    });
  }

  findOneByUsername(name: string) {
    return this.prismaService.user.findFirstOrThrow({
      where: { name },
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
