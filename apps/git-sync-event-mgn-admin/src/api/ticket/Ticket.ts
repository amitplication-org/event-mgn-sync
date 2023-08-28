import { Attendee } from "../attendee/Attendee";

export type Ticket = {
  id: string;
  ticketType?: "FREE" | "PAID";
  attendee?: Attendee;
};
