import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  speaker?: StringFilter;
  time?: DateTimeFilter;
  event?: EventWhereUniqueInput;
};
