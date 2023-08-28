import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";

export type TicketCreateInput = {
  ticketType: "FREE" | "PAID";
  attendee: AttendeeWhereUniqueInput;
};
