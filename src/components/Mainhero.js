import React from "react";
import Tag from "./Tag";
import Article from "./Article";

function mainHero(props) {
  return (
    <div>
      <div className="container padding grid">
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
