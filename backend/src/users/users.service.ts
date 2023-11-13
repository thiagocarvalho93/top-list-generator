import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create({ email, name, password }) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    const response = await this.prismaService.user.create({
      data: {
        email,
        name,
        role: 'USER',
        passwordHash: hash,
      },
    });

    delete response.passwordHash;
    return response;
  }

  async findAll({ name, email }) {
    const response = await this.prismaService.user.findMany({
      where: {
        name: { contains: name },
        email: { contains: email },
      },
    });

    response.map((x) => delete x.passwordHash);
    return response;
  }

  async findOne(id: number) {
    const response = await this.prismaService.user.findFirstOrThrow({
      where: { id },
    });

    delete response.passwordHash;
    return response;
  }

  async findOneByUsername(name: string) {
    const response = await this.prismaService.user.findFirstOrThrow({
      where: { name },
    });

    delete response.passwordHash;
    return response;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const response = await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });

    delete response.passwordHash;
    return response;
  }

  async remove(id: number) {
    const response = await this.prismaService.user.delete({
      where: { id },
    });

    delete response.passwordHash;
    return response;
  }
}
