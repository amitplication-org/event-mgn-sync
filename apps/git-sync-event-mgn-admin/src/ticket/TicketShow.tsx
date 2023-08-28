import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { ATTENDEE_TITLE_FIELD } from "../attendee/AttendeeTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Ticket Type" source="ticketType" />
        <ReferenceField
          label="Attendee"
          source="attendee.id"
          reference="Attendee"
        >
          <TextField source={ATTENDEE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
