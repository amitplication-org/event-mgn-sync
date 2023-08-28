import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";

export type Attendee = {
  id: string;
  name: string;
  email: string;
  event?: Event;
  tikets?: Array<Ticket>;
};
