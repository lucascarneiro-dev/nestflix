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
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre, Prisma } from '.prisma/client';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post('/new')
  @UsePipes(ValidationPipe)
  create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(createGenreDto);
  }

  @Get('/')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGenreDto: CreateGenreDto,
  ): Promise<Genre> {
    return this.genreService.update(id, updateGenreDto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.genreService.remove(id);
  }
}
