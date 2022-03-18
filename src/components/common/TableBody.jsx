import React from "react";
import styled from "styled-components";

function TableBody({ columns, data }) {
  // Generera unik id då det finns articlar i databasen med samma article_number
  const generateUniqueKey = (item) => {
    return item.article_number + item.price;
  };

  return (
    <tbody>
      {/* Mappa över data som kommer in från higher order component */}
      {data.map((item) => (
        <tr key={generateUniqueKey(item)}>
          {/* Mappa över header arrayen som kommer in från higher order component */}
          {columns.map((header) => (
            // skriv ut data objectet om den matchar med header
            <Td key={item[header]}>{item[header]}</Td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

const Td = styled.td`
  text-align: center;
  border: 1px solid black;
`;

export default TableBody;
