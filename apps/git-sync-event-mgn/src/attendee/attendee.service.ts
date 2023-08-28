import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttendeeServiceBase } from "./base/attendee.service.base";

@Injectable()
export class AttendeeService extends AttendeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  
  async greetingAttendee(attendeeId: string): Promise<string> {
    const attendee = await this.prisma.attendee.findUnique({
      where: {
        id: attendeeId,
      },
    });

    if (!attendee) {
      throw new Error("Attendee not found");
    }

    return `Hello ${attendee.name}`;
  }
}
