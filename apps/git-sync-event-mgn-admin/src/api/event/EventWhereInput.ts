import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AttendeeListRelationFilter } from "../attendee/AttendeeListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  description?: StringFilter;
  startDate?: DateTimeFilter;
  endDate?: DateTimeFilter;
  location?: StringFilter;
  attendees?: AttendeeListRelationFilter;
  sessions?: SessionListRelationFilter;
};
