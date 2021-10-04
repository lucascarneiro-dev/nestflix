import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { Staff } from '.prisma/client';
export declare class ParticipantsController {
    private readonly participantsService;
    constructor(participantsService: ParticipantsService);
    create(createStaffDto: CreateParticipantDto): Promise<Staff>;
    findAll(): Promise<Staff[]>;
    findOne(id: number): Promise<Staff>;
    update(id: number, updateParticipantDto: CreateParticipantDto): Promise<Staff>;
    remove(id: number): Promise<Staff>;
}
