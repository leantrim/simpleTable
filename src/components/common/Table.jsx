import React from "react";
import { StyledTable } from "../styles/StyledTable";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, data }) {
  return (
    <StyledTable>
      <TableHeader columns={columns} />

      <TableBody columns={columns} data={data} />
    </StyledTable>
  );
}

export default Table;
