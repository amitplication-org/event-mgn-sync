import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Location" source="location" />
      </Datagrid>
    </List>
  );
};
