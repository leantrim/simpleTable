import React from "react";
import styled from "styled-components";

function TableBody({ columns, data }) {
  return (
    <>
      {data.map((item) => (
        <Tablerow>
          {columns.map((header) => (
            <Td>{item[header]}</Td>
          ))}
        </Tablerow>
      ))}
    </>
  );
}

const Tablerow = styled.tr``;

const Td = styled.td`
  text-align: center;
  border: 1px solid black;
`;

export default TableBody;
