import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  location?: SortOrder;
};
