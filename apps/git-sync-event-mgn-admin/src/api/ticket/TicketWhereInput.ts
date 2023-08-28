import { StringFilter } from "../../util/StringFilter";
import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";

export type TicketWhereInput = {
  id?: StringFilter;
  ticketType?: "FREE" | "PAID";
  attendee?: AttendeeWhereUniqueInput;
};
