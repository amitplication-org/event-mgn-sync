import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "name";

export const SessionTitle = (record: TSession): string => {
  return record.name || String(record.id);
};
