import { Attendee } from "../attendee/Attendee";
import { Session } from "../session/Session";

export type Event = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  attendees?: Array<Attendee>;
  sessions?: Array<Session>;
};
