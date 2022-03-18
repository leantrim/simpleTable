import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 10px;

  tr:nth-child(even) {
    background-color: #ffffff;
  }
`;

export const TD = styled.td`
  text-align: center;
  border: 1px solid black;
`;

// Tomma regler, lämnar dem kvar som placeholders ifall man skulle stylea i framtiden
export const THead = styled.thead``;

export const TFoot = styled.tfoot``;

export const TBody = styled.tbody``;

export const TR = styled.tr``;

export const TH = styled.th``;
