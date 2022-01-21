import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./app.css";
import Dictionary from "./components/Dictionary";
import SearchForm from "./components/Search";
const axios = require("axios");

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function getAll() {
      try {
        const word = "car";
        const response = await axios.get(`http://localhost:3010/getall/getall`);
        console.log(response.data);

        // console.log(itemList);
        setItemList(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    getAll();
  }, []);

  const searchHandler = async (word, pos) => {
    const response = await axios.get(`http://localhost:3010/${word}`);
  };
  return (
    <div className="App">
      <Router>
        <div className="top">
          <h1 className="App-header">English Dictionary</h1>
          <SearchForm searchHandler={searchHandler}></SearchForm>
        </div>
        <Dictionary itemList={itemList}></Dictionary>
      </Router>
    </div>
  );
}

export default App;
