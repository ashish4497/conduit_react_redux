import React from "react";
import { Link, Route } from "react-router-dom";
import Hero from "./Hero";
class SinglePost extends React.Component {
  componentDidMount() {
    fetch(
      `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
    )
      .then((res) => res.json())
      .then((article) => {
        console.log(article, "log the article");
      });
  }
  render() {
    // console.log(this.props.match.params.slug, "check the history");

    return (
      <>
        <div className="container flex-2 ">
          <Link>
            <h2>Your Feed</h2>
          </Link>
          <Route to="/" component={Hero}>
            <Link to="/">
              <h2>Global Feed</h2>
            </Link>
          </Route>
        </div>
      </>
    );
  }
}

export default SinglePost;
