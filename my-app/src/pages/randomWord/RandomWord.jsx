import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RandomWord() {
  const { letter, pos } = useParams();
  const [randomWord, setRandomWord] = useState([]);
  useEffect(() => {
    const getRandomWord = async () => {
      let res;
      if (letter) {
        res = await axios.get(
          `http://localhost:3010/part-of-speech/${pos}?letter=${letter}`
        );
      } else {
        res = await axios.get(`http://localhost:3010/part-of-speech/${pos}`);
      }

      setRandomWord(res.data);
    };
    getRandomWord();
  }, [letter, pos]);

  return (
    <div>
      <h1 className="word">{randomWord.word}</h1>
      <h3 className="pos">{randomWord.pos}</h3>
      <p className="definition">{randomWord.definitions}</p>
    </div>
  );
}

export default RandomWord;
