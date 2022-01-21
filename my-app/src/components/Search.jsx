import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchForm({ searchHandler }) {
  const navigate = useNavigate();
  const [wordValue, setWordValue] = useState([]);
  const [posValue, setPosValue] = useState([]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // if (wordValue.lenth) {
        //   return;
        // } else if (wordValue && !posValue) {

        if (posValue.length > 1) {
          console.log("WWWWWW");
          navigate(`/item/${wordValue}/${posValue}`);
        } else if (wordValue.length > 1 && posValue.length < 1)
          navigate(`/item/${wordValue}`);
        searchHandler(wordValue, posValue);
        // } else if (wordValue && posValue) {
        //   return;
        // }
      }}
    >
      <input
        onChange={(e) => {
          setWordValue(e.target.value);
        }}
        placeholder="Enter Word"
        type="text"
        name="username"
      />

      <br />
      <br />
      <input
        onChange={(e) => {
          setPosValue(e.target.value);
        }}
        placeholder="Enter Part Of Speech"
        type="text"
        name="email_id"
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchForm;
