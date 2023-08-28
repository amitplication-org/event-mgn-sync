import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  speaker?: SortOrder;
  time?: SortOrder;
  eventId?: SortOrder;
};
