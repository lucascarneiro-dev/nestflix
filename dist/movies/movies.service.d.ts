import { Movie, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MoviesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.MovieCreateInput): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    update(id: number, data: Prisma.MovieCreateInput): Promise<Movie>;
    remove(id: number): Promise<Movie>;
}
