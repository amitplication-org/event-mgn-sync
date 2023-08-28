import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const SessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sessions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
