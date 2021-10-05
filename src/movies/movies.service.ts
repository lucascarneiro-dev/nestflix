import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MovieCreateInput) {
    return this.prisma.movie.create({ data: data });
  }

  async findAll(): Promise<Movie[]> {
    return this.prisma.movie.findMany({
      include: {
        staff: {
          select: {
            name: true,
            img: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<Movie> {
    return this.prisma.movie.findUnique({
      where: {
        id: id,
      },
      include: {
        staff: {
          select: {
            name: true,
            img: true,
            birth: true,
            staff: true,
          },
        },
        genre: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async update(id: number, data: Prisma.MovieCreateInput): Promise<Movie> {
    return await this.prisma.movie.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number) {
    return await this.prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }
}
