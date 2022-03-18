import React from "react";
import { THead, TH, TR } from "../styled/StyledTable";

function TableHeader({ columns }) {
  // Funktion som ändrar stringen till Stor bokstav
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <THead>
      <TR>
        {columns.map((column) => (
          <TH key={column}>{capitalizeFirstLetter(column)}</TH>
        ))}
      </TR>
    </THead>
  );
}

export default TableHeader;
