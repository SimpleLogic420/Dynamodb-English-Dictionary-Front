import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ItemWithPos() {
  const { word, pos } = useParams();
  const [searchState, setSearchState] = useState([]);
  useEffect(() => {
    const getWordAndPos = async () => {
      const res = await axios.get(`http://localhost:3010/${word}/${pos}`);
      setSearchState(res.data[0]);
    };
    getWordAndPos();
  }, [word, pos]);
  return (
    <div>
      <h1 className="word">{searchState.word}</h1>
      <h3 className="pos">{searchState.pos}</h3>
      <p className="definition">{searchState.definitions}</p>
    </div>
  );
}

export default ItemWithPos;
