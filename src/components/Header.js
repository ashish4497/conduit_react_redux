import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header className="container flex ">
        <div>
          <Link className="logo" to="/">
            <p className="logo_name">conduit</p>
          </Link>
        </div>
        <div className="flex-2">
          <Link className="logo" to="/Login">
            <p className="logo_name">login</p>
          </Link>
          <Link className="logo" to="/Signup">
            <p className="logo_name">signup</p>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
