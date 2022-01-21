import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function Dictionary({ itemList }) {
  return (
    <div className="openDictionary">
      <ol>
        {itemList.map((item, i) => {
          return (
            <li key={i}>
              <Link to={"/item/" + item.word}>{item.word}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Dictionary;
