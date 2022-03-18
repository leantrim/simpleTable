import React from "react";
import styled from "styled-components";

function TableHeader({ columns }) {
  // Funktion som ändrar stringen till Stor bokstav
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <TableStyle>
      <Tablerow>
        {columns.map((column) => (
          <Th key={column}>{capitalizeFirstLetter(column)}</Th>
        ))}
      </Tablerow>
    </TableStyle>
  );
}

const TableStyle = styled.thead``;

const Tablerow = styled.tr``;

const Th = styled.th``;

export default TableHeader;
