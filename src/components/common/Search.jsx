import React from "react";
import styled from "styled-components";

function Search({ placeholder, value, onChange }) {
  return (
    <SearchStyle
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    ></SearchStyle>
  );
}

const SearchStyle = styled.input`
  width: 18%;
  margin: 20px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px;
`;

export default Search;
