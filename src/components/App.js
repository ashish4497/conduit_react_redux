import React from "react";
import ".././App.css";
import Header from "./Header";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { fetchArticle, fetchTags } from "../action/index";
import Hero from "./Hero";
import Footer from "./Footer";
import MainHero from "./Mainhero";
import Post from "./NewPost";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var articlesUrl =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    // console.log(this.props, "hlo");
    this.props.fetchArticle(articlesUrl);
    var tagUrl = "https://conduit.productionready.io/api/tags";
    this.props.fetchTags(tagUrl);
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Hero /> */}
        <Switch>
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/" component={Hero} />
        </Switch>
        {/* <MainHero /> */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { fetchArticle, fetchTags })(App);
