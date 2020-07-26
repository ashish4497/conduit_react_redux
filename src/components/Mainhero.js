import React from "react";
import Tag from "./Tag";
import Article from "./Article";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

function mainHero(props) {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <div className="container padding grid">
        <div className="left_sec">
          <Article />
        </div>
        <div className="right_sec">
          <Tag />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default mainHero;
