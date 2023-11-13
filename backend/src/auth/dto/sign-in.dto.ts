import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: `User name`,
    example: 'johndoe2023',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  username: string;

  @ApiProperty({
    description: `User password`,
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
