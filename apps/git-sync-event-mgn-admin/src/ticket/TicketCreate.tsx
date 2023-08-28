import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { AttendeeTitle } from "../attendee/AttendeeTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="ticketType"
          label="Ticket Type"
          choices={[
            { label: "FREE", value: "FREE" },
            { label: "PAID", value: "PAID" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="attendee.id"
          reference="Attendee"
          label="Attendee"
        >
          <SelectInput optionText={AttendeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
