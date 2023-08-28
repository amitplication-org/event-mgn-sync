import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionUpdateInput = {
  name?: string;
  speaker?: string;
  time?: Date;
  event?: EventWhereUniqueInput;
};
