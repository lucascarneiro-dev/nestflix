import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, Prisma } from '.prisma/client';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post('/new')
  @UsePipes(ValidationPipe)
  async create(@Body() createMovie: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovie);
  }

  @Get('/')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id',ParseIntPipe) id: number): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: CreateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id',ParseIntPipe) id: number) {
    return this.moviesService.remove(id);
  }
}
