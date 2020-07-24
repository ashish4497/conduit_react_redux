import React from "react";
import ".././App.css";
import Header from "./Header";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { fetchArticle } from "../action/index";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var articlesUrl =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    console.log(this.props, "hlo");
    this.props.fetchArticle(articlesUrl);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { fetchArticle })(App);
