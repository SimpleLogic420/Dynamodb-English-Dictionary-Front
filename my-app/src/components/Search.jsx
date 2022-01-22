import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const [wordValue, setWordValue] = useState([]);
  const [posValue, setPosValue] = useState([]);
  const [letterValue, setLetterValue] = useState([]);
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();

        if (
          posValue.length > 1 &&
          wordValue.length > 1 &&
          letterValue.length < 1
        ) {
          console.log("WWWWWW");
          navigate(`/item/${wordValue}/${posValue}`);
        } else if (wordValue.length > 1 && posValue.length < 1) {
          console.log("LLLLLLLL");
          navigate(`/item/${wordValue}`);
        } else if (wordValue.length < 1 && posValue.length > 1) {
          if (letterValue.length >= 1) {
            navigate(`/partOfSpeech/${posValue}/${letterValue}`);
          } else {
            navigate(`/partOfSpeech/${posValue}`);
          }
        }

        // searchHandler(wordValue, posValue);
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
      <input
        onChange={(e) => {
          setPosValue(e.target.value);
        }}
        placeholder="Enter Part Of Speech"
        type="text"
        name="pos"
      />
      <br />
      <input
        onChange={(e) => {
          setLetterValue(e.target.value);
        }}
        placeholder="Enter First Letters"
        type="text"
        name="letters"
      />
      <br />
      <input className="button-30" type="submit" value="Search" />
      <br />
    </form>
  );
}

export default SearchForm;
