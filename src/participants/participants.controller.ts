import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Staff } from '.prisma/client';

@Controller('staff')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Post('/new-participant')
  @UsePipes(ValidationPipe)
  async create(@Body() createStaffDto: CreateParticipantDto) {
    return this.participantsService.create(createStaffDto);
  }

  @Get('/participants')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Staff[]> {
    return this.participantsService.findAll();
  }

  @Get('/participants/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id',ParseIntPipe) id: number): Promise<Staff> {
    return this.participantsService.findOne(id);
  }

  @Patch('/participants/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateParticipantDto: CreateParticipantDto,
  ) {
    return this.participantsService.update(id, updateParticipantDto);
  }

  @Delete('/participants/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.remove(id);
  }
}
