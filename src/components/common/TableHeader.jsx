import React from "react";

function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th>{column}</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
