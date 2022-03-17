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

const Tablerow = styled.tr`
  margin-bottom: 2em;
`;

const Td = styled.td`
  text-align: center;
`;

export default TableBody;
