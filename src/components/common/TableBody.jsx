import React from "react";

function TableBody({ columns, data }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr>
          {columns.map((header) => (
            <td>{item[header]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
