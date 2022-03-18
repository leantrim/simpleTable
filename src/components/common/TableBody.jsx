import React from "react";
import { TBody, TR, TD } from "../styles/StyledTable";

function TableBody({ columns, data }) {
  // Generera unik id då det finns articlar i databasen med samma article_number
  const generateUniqueKey = (item) => {
    return item.article_number + item.price;
  };

  return (
    <TBody>
      {/* Mappa över data som kommer in från higher order component */}
      {data.map((item) => (
        <TR key={generateUniqueKey(item)}>
          {/* Mappa över header arrayen som kommer in från higher order component */}
          {columns.map((header) => (
            // skriv ut data objectet om den matchar med header
            <TD key={item[header]}>
              {/* Om ingen beskrivning finns för artikeln skriv ut meddelande om det. Finns en produkt som saknar beskrivning. */}
              {(!item[header] && "Beskrivning saknas för denna produkten") ||
                item[header]}
            </TD>
          ))}
        </TR>
      ))}
    </TBody>
  );
}

export default TableBody;
