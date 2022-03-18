import React from "react";
import { TBody, TR, TD } from "../styled/StyledTable";

function TableBody({ columns, data }) {
  // Generera unik id då det finns articlar i databasen med samma article_number
  const generateUniqueKey = (item) => {
    return item.article_number + item.price;
  };

  return (
    <TBody>
      {/* Mappa över data som kommer in från parent component */}
      {data.map((item) => (
        <TR key={generateUniqueKey(item)}>
          {/* Mappa över header arrayen som kommer in från parent component !**! */}
          {columns.map((header) => (
            // skriv ut data objectet om den matchar med header
            <TD key={item[header]}>{item[header]}</TD>
          ))}
        </TR>
      ))}
    </TBody>
  );
}

// Man kan använda bibloteket _lodash (_get(item, item2)) för att enkelt få fram columner som ska visas baserat på header men valde att köra med rå javascript istället.

export default TableBody;
