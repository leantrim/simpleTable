import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "./common/Table";

import articleService from "../services/articleServices";

function ProductTable() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    const articles = await articleService.getAllArticlesFromDb();
    setArticles(articles);
  };

  useEffect(() => {
    // Hämta produkterna
    loadArticles();
  }, []);

  const handleChange = async (e) => {
    // Stoppa sidan från att ladda om
    e.preventDefault();

    // Updatera statet med det man skriver i sökrutan
    setSearch(e.target.value);

    // Updatera data som till det man skriver in
    const data = { search: e.target.value };

    // Anrop kommer göras vid varje knapptryck men man kan enkelt ändra till
    // att sökning ska göras när man trycker enter istället så slipper man
    // flera anrop till databasen.

    /* Anrop till databas */
    const articles = await articleService.getArticlesFromDb(data);

    // Updatera statet med det filtrerade objected som kommer från databasen
    setArticles(articles);
  };

  // En lista på arrays av specifik information som ska laddas in i tabelen.
  const tableHeadColumn = ["title", "description", "price", "category"];

  return (
    <Container>
      <Search
        placeholder="Search for a product"
        value={search}
        onChange={(e) => handleChange(e)}
      ></Search>
      <Table columns={tableHeadColumn} data={articles} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  background-color: #e8e8e8;
  border-radius: 8px;
`;

const Search = styled.input`
  width: 18%;
  margin: 20px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px;
`;

export default ProductTable;
