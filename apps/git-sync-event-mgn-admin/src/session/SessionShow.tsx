import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const SessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Speaker" source="speaker" />
        <TextField label="Time" source="time" />
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
