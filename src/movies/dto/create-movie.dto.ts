import { IsNotEmpty, IsOptional } from 'class-validator';
import { Prisma } from '.prisma/client';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  release_date: string;

  @IsNotEmpty()
  duration: number;

  @IsOptional()
  genre: Prisma.GenreCreateNestedManyWithoutMovieInput;

  @IsOptional()
  participants: Prisma.StaffCreateNestedManyWithoutMovieInput;
}
