import React from "react";
import MainHero from "./Mainhero";
import Postroute from "./Postroute";

export default function Hero(props) {
  console.log(props, "log ");

  return (
    <>
      {localStorage.authToken ? (
        <MainHero />
      ) : (
        <>
          {" "}
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body center">
              <div className="container">
                <h1 className="title">conduit </h1>
                <h2 className="subtitle">A place to share a knowledge</h2>
              </div>
            </div>
          </section>
          <MainHero />
        </>
      )}
    </>
  );
}
