import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketUpdateManyWithoutAttendeesInput } from "./TicketUpdateManyWithoutAttendeesInput";

export type AttendeeUpdateInput = {
  name?: string;
  email?: string;
  event?: EventWhereUniqueInput;
  tikets?: TicketUpdateManyWithoutAttendeesInput;
};
