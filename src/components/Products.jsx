import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./common/Table";

function ProductTable(props) {
  const [value, setValue] = useState();
  const [articles, setArticles] = useState([]);

  const getArticlesFromDb = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000");
      setArticles(data);
    } catch (error) {}
  };

  useEffect(() => {
    getArticlesFromDb();
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
    <div>
      <input value={value} onChange={(e) => handleChange(e)}></input>
      <Table columns={tableHeadColumn} data={articles} />
    </div>
  );
}

export default ProductTable;
