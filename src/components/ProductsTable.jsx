import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "./common/Table";
import Search from "./common/Search";

import articleService from "../services/articleServices";

function ProductTable() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    // Hämta produkterna från backend servern & updatera statet
    const articles = await articleService.getAllArticlesFromDb();
    setArticles(articles);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  // En lista på arrays av specifik information som ska visas i tabelen, ordningen av arrayen visas i tabeln också.
  const tableHeadColumn = ["title", "description", "category", "price"];

  const handleChange = async (e) => {
    // Stoppa sidan från att ladda om när man skriver i sökrutan
    e.preventDefault();

    // Updatera statet med det man skriver i sökrutan
    setSearch(e.target.value);

    // Updatera data som till det man skriver in i sökrutan
    const data = { search: e.target.value };

    //OBS! Anrop kommer göras vid varje bokstav som skrivs in i sökrutan men man kan enkelt ändra till
    // att sökning ska göras när man trycker enter istället så slipper man
    // göra flera anrop till databasen.

    /* Anrop till databas med data objectet */
    const articles = await articleService.getFilteredArticlesFromDb(data);

    // Updatera statet med det filtrerade objected som kommer från databasen
    setArticles(articles);
  };

  return (
    <Container>
      {/* Search component */}
      <Search
        placeholder="Search for a product"
        value={search}
        onChange={(e) => handleChange(e)}
      ></Search>
      {/* Table komponent, kan enkelt återanvändas medans backenden sköter filtrering. */}
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

export default ProductTable;
