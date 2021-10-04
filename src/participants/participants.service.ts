import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Staff, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.StaffCreateInput) {
    return this.prisma.staff.create({data: data});
  }

  async findAll(): Promise<Staff[]> {
    return this.prisma.staff.findMany();
  }

  async findOne(id: number): Promise<Staff> {
    return this.prisma.staff.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: Prisma.StaffCreateInput): Promise<Staff> {
    return this.prisma.staff.update({
      where: {
        id: id,
      },
      data:data,
    });
  }

  async remove(id: number) {
    return await this.prisma.staff.delete({
      where: {
        id: id,
      },
    });
  }
}
