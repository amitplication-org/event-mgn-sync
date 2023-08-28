import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { AttendeeTitle } from "../attendee/AttendeeTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
