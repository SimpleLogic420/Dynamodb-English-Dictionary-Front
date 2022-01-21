import React, { useState } from "react";

function SearchForm({ searchHandler }) {
  const [wordValue, setWordValue] = useState([]);
  const [posValue, setPosValue] = useState([]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler(wordValue, posValue);
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
