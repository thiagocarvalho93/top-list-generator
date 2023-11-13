import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: `The user name`,
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: `The user email`,
    example: 'johndoe@example.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `The user password`,
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Exclude()
  passwordHash: string;

  @ApiProperty({
    description: `The role of the user`,
    example: 'USER',
  })
  @IsEnum(Role)
  role: Role;
}
