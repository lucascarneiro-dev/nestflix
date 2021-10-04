import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre, Prisma } from '.prisma/client';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GenreCreateInput) {
    return this.prisma.genre.create({ data: data });
  }

  async findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: Prisma.GenreCreateInput): Promise<Genre> {
    return this.prisma.genre.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.genre.delete({
      where: {
        id:id,
      },
    });
  }
}
