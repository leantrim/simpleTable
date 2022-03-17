import React from "react";
import styled from "styled-components";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ columns, data }) {
  return (
    <TableContainer>
      <TableHeader columns={columns} />

      <TableBody columns={columns} data={data} />
    </TableContainer>
  );
}

const TableContainer = styled.table``;

export default Table;
