import React from "react";
import { useEffect, useState } from "react";
import Table from "./common/Table";

import getArticlesFromDb from "../services/articleServices";

function ProductTable() {
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    const articles = await getArticlesFromDb();

    setArticles(articles);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const tableHeadColumn = [
    "title",
    "description",
    "price",
    "stock",
    "category",
    "url",
  ];

  return (
    <div className="container">
      <input value={""} onChange={(e) => handleChange(e)}></input>
      <Table columns={tableHeadColumn} data={articles} />
    </div>
  );
}

export default ProductTable;
