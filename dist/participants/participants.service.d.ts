import { Staff, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParticipantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.StaffCreateInput): Promise<Staff>;
    findAll(): Promise<Staff[]>;
    findOne(id: number): Promise<Staff>;
    update(id: number, data: Prisma.StaffCreateInput): Promise<Staff>;
    remove(id: number): Promise<Staff>;
}
