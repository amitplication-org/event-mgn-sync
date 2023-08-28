import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketCreateNestedManyWithoutAttendeesInput } from "./TicketCreateNestedManyWithoutAttendeesInput";

export type AttendeeCreateInput = {
  name: string;
  email: string;
  event: EventWhereUniqueInput;
  tikets?: TicketCreateNestedManyWithoutAttendeesInput;
};
