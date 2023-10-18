import { StringFilter } from "../../util/StringFilter";
import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  ticketType?: "FREE" | "PAID";
  attendee?: AttendeeWhereUniqueInput;
  title?: StringNullableFilter;
};
