import { AttendeeCreateNestedManyWithoutEventsInput } from "./AttendeeCreateNestedManyWithoutEventsInput";
import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  attendees?: AttendeeCreateNestedManyWithoutEventsInput;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
};
