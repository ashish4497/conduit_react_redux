import React from "react";
import Tag from "./Tag";
import Article from "./Article";
import Postroute from "./Postroute";

function mainHero(props) {
  return (
    <div className="container">
      <Postroute />
      <div className="padding grid">
        <div className="left_sec">
          <Article />
        </div>
        <div className="right_sec">
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default mainHero;
