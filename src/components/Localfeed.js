import React from "react";
import { connect } from "react-redux";

class Localfeed extends React.Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   fetch(
  //     `https://conduit.productionready.io/api/articles/${this.props.match.params.slug}`
  //   )
  //     .then((res) => res.json())
  //     .then((article) => {
  //       console.log(article, "log the article");
  //     });
  // }
  render() {
    console.log(this.props, "check");

    return <p>hlo</p>;
  }
}

export default connect()(Localfeed);
