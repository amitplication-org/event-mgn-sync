import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  eventId?: SortOrder;
};
