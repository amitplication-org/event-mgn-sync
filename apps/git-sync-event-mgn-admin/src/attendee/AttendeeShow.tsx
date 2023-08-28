import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTENDEE_TITLE_FIELD } from "./AttendeeTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const AttendeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Ticket"
          target="attendeeId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Ticket Type" source="ticketType" />
            <ReferenceField
              label="Attendee"
              source="attendee.id"
              reference="Attendee"
            >
              <TextField source={ATTENDEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
