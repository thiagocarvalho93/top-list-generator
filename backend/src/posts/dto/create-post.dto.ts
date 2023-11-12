import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose({ name: 'author_id' })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  author_id: number;

  @Expose({ name: 'category_id' })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  category_id: number;
}
