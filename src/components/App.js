import React from "react";
import ".././App.css";
import Header from "./Header";
import { fetchArticle } from "../action/index";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var articlesUrl =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    // console.log(articlesUrl, "hlo");
    this.props.dispatch(fetchArticle(articlesUrl));
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

export default connect()(App);
