import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Item() {
  const { word, pos } = useParams();

  const [wordsState, setWordsState] = useState([]);
  //   const [posState, setWordsState] = useState([]);

  useEffect(() => {
    const getWordAndPos = async () => {
      const res = await axios.get(`http://localhost:3010/${word}/${pos}`);
      setWordsState(res.data.Items);
    };
    const getWord = async () => {
      const res = await axios.get(`http://localhost:3010/${word}`);
      setWordsState(res.data.Items);
    };

    if (word && !pos) {
      getWord();
    } else if (word && pos) {
      getWordAndPos();
    }
  }, [word, pos]);
  return (
    <div>
      {wordsState.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="word">{item.word}</h1>
            <h3 className="pos">{item.pos}</h3>
            <br />
            <p className="definition">{item.definitions}</p>
            {wordsState.length > 1 ? <hr /> : ""}
          </div>
        );
      })}
    </div>
  );
}

export default Item;
