import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Location" source="location" />
        <ReferenceManyField
          reference="Attendee"
          target="eventId"
          label="Attendees"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Email" source="email" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="eventId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Speaker" source="speaker" />
            <TextField label="Time" source="time" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
