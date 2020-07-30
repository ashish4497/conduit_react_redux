import React from "react";
import { Link } from "react-router-dom";

class Postroute extends React.Component {
  render() {
    return (
      <>
        <div className="container flex-2 ">
          <div>
            <Link className="logo" to="/userpost/:slug">
              <p className="logo_name">Your Feed</p>
            </Link>
          </div>
          <div>
            <Link className="logo" to="/">
              <p className="logo_name">Global Feed</p>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Postroute;
