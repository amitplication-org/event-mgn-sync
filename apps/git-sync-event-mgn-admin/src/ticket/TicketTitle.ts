import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "title";

export const TicketTitle = (record: TTicket): string => {
  return record.title?.toString() || String(record.id);
};
