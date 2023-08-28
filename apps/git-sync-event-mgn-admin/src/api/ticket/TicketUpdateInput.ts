import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";

export type TicketUpdateInput = {
  ticketType?: "FREE" | "PAID";
  attendee?: AttendeeWhereUniqueInput;
};
