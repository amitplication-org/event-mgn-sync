import { StringFilter } from "../../util/StringFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AttendeeWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  email?: StringFilter;
  event?: EventWhereUniqueInput;
  tikets?: TicketListRelationFilter;
  lastName?: StringNullableFilter;
};
