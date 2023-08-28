import { Event } from "../event/Event";

export type Session = {
  id: string;
  name: string;
  speaker: string;
  time: Date;
  event?: Event;
};
