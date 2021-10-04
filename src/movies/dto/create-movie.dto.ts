import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  release_date: string;

  @IsNotEmpty()
  duration: number;
}
