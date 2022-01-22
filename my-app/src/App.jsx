import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import "./app.scss";
import Dictionary from "./components/Dictionary";
import SearchForm from "./components/Search";
import Item from "./pages/item/Item";
import ItemWithPos from "./pages/itemWithPos/ItemWithPos";
import RandomWord from "./pages/randomWord/RandomWord";
const axios = require("axios");

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    async function getAll() {
      try {
        const word = "car";
        const response = await axios.get(`http://localhost:3010/getall/getall`);
        setItemList(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    getAll();
  }, []);

  // const searchHandler = async (word, pos) => {
  //   const response = await axios.get(`http://localhost:3010/${word}`);
  // };
  return (
    <div className="App">
      <BrowserRouter>
        <div className="top">
          <h1 className="App-header">English Dictionary</h1>
          <SearchForm></SearchForm>
        </div>
        <Dictionary itemList={itemList}></Dictionary>

        <Routes>
          <Route path="/item/:word" element={<Item />}></Route>
          <Route path="/item/:word/:pos" element={<ItemWithPos />}></Route>
          <Route path="/partOfSpeech/:pos" element={<RandomWord />}></Route>
          <Route
            path="/partOfSpeech/:pos/:letter"
            element={<RandomWord />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
