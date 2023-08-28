import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Speaker" source="speaker" />
        <DateTimeInput label="Time" source="time" />
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
