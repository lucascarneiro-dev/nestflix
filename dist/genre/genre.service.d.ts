import { PrismaService } from 'src/prisma/prisma.service';
import { Genre, Prisma } from '.prisma/client';
export declare class GenreService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.GenreCreateInput): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    update(id: number, data: Prisma.GenreCreateInput): Promise<Genre>;
    remove(id: number): Promise<Genre>;
}
