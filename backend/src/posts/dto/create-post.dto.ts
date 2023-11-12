import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: `Title of the post`,
    example: 'Top 5 web frameworks',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: `The id of the author`,
    example: 1,
  })
  @Expose({ name: 'author_id' })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  author_id: number;

  @ApiProperty({
    description: `The id of the category`,
    example: 1,
  })
  @Expose({ name: 'category_id' })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  category_id: number;
}
