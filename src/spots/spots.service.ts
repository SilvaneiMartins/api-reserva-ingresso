import { Injectable } from '@nestjs/common';
import { SPOTSTATUS } from '@prisma/client';

import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';

type CreateDtoInput = CreateSpotDto & { eventId: string };

@Injectable()
export class SpotsService {
    constructor(private prisma: PrismaService) {}

    async create(createSpotDto: CreateDtoInput) {
        const event = await this.prisma.event.findFirst({
            where: {
                id: createSpotDto.eventId,
            },
        });

        if (!event) {
            throw new Error('Event not found');
        }

        return this.prisma.spot.create({
            data: {
                ...createSpotDto,
                status: SPOTSTATUS.AVAILABLE,
            },
        });
    }

    findAll(eventId: string) {
        return this.prisma.spot.findMany({
            where: {
                eventId,
            },
        });
    }

    findOne(eventId: string, spotId: string) {
        return this.prisma.spot.findFirst({
            where: {
                id: spotId,
                eventId,
            },
        });
    }

    update(eventId: string, spotId: string, updateSpotDto: UpdateSpotDto) {
        return this.prisma.spot.update({
            where: {
                id: spotId,
                eventId,
            },
            data: {
                ...updateSpotDto,
                status: SPOTSTATUS.AVAILABLE,
            },
        });
    }

    remove(eventId: string, spotId: string) {
        return this.prisma.spot.delete({
            where: {
                id: spotId,
                eventId,
            },
        });
    }
}
