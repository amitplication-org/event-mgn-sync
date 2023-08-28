import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  id?: SortOrder;
  ticketType?: SortOrder;
  attendeeId?: SortOrder;
};
