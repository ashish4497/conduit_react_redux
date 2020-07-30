import React from "react";
import ".././App.css";
import Header from "./Header";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { fetchArticle, fetchTags, getUserInfo } from "../action/index";
import Hero from "./Hero";
import Footer from "./Footer";
import Post from "./NewPost";
import UserPost from "./UserPost";
import Setting from "./Setting";
import Article from "./Article";
import Userdetail from "./Userdetail";

class App extends React.Component {
  componentDidMount() {
    var articlesUrl =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    this.props.fetchArticle(articlesUrl);
    var tagUrl = "https://conduit.productionready.io/api/tags";
    this.props.fetchTags(tagUrl);
    var url = "https://conduit.productionready.io/api/user";
    if (localStorage.authToken) {
      this.props.getUserInfo(url, localStorage.authToken);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {localStorage.authToken ? (
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/post" component={Post} />
            <Route path="/userpost/:slug" component={UserPost} />
            <Route path="/article" component={Article} />
            <Route path="/setting" component={Setting} />
            <Route path="/userdetail/:slug" component={Userdetail} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
          </Switch>
        )}

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
export default connect(mapStateToProps, {
  fetchArticle,
  fetchTags,
  getUserInfo,
})(App);
