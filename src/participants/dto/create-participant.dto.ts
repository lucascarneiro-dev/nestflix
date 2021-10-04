import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipantDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  birth: string;

  @IsNotEmpty()
  staff: string;

  @IsOptional()
  movieId: number;
}
