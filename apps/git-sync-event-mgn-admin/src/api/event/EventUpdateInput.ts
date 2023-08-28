import { AttendeeUpdateManyWithoutEventsInput } from "./AttendeeUpdateManyWithoutEventsInput";
import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  attendees?: AttendeeUpdateManyWithoutEventsInput;
  sessions?: SessionUpdateManyWithoutEventsInput;
};
