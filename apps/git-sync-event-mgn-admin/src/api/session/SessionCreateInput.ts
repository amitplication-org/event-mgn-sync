import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionCreateInput = {
  name: string;
  speaker: string;
  time: Date;
  event: EventWhereUniqueInput;
};
