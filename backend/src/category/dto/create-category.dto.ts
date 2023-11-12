import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: `The description of the category`,
    example: 'Sports',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;
}
