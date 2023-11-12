import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  authorId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  categoryId: number;
}
