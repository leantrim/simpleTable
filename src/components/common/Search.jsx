import React from "react";
import styled from "styled-components";

function Search({ placeholder, value, onChange }) {
  return (
    <StyledSearch
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}

const StyledSearch = styled.input`
  width: 20%;
  margin: 20px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: none;
  outline: none;
`;

export default Search;
