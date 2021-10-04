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

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Post('/new')
  @UsePipes(ValidationPipe)
  async create(@Body() createStaffDto: CreateParticipantDto) {
    return this.participantsService.create(createStaffDto);
  }

  @Get('/')
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Staff[]> {
    return this.participantsService.findAll();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id',ParseIntPipe) id: number): Promise<Staff> {
    return this.participantsService.findOne(id);
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateParticipantDto: CreateParticipantDto,
  ) {
    return this.participantsService.update(id, updateParticipantDto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.remove(id);
  }
}
