import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  release_date: string;

  @IsNotEmpty()
  duration: number;

  // @IsOptional()
  // genre: [number];

  // @IsOptional()
  // participants: [number];
}
