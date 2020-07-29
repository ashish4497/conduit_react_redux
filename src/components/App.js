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
import SinglePost from "./SinglePost";
import Setting from "./Setting";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var articlesUrl =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    this.props.fetchArticle(articlesUrl);
    var tagUrl = "https://conduit.productionready.io/api/tags";
    this.props.fetchTags(tagUrl);
    var url = "https://conduit.productionready.io/api/user";
    if (localStorage.authToken) {
      console.log(localStorage.authToken + " TOKEN");
      this.props.getUserInfo(url, localStorage.authToken);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.user !== this.props.user) {
  //     var url = "https://conduit.productionready.io/api/users";
  //     if (localStorage.authToken) {
  //       this.props.getUserInfo(url, localStorage.authToken);
  //     }
  //   }
  // }
  // publicRoute = () => {
  //   return (
  //     <>
  //       <Switch>
  //         <Route path="/Signup" component={Signup} />
  //         <Route path="/Login" component={Login} />
  //         <Route path="/" component={Hero} />
  //         <Route path="/post" component={Post} />
  //       </Switch>
  //     </>
  //   );
  // };

  // privateRoute = () => {
  //   return (
  // <>
  //  <Route path="/post" component={Post} />;
  //  <Route path="/userpost" component={UserPost} />
  // </>
  // )
  // };
  render() {
    const user = this.props.user;
    console.log(user, "asdfg");

    return (
      <div className="App">
        <Header />

        {localStorage.authToken ? (
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/userpost/:slug" component={SinglePost} />
            <Route path="/post" component={Post} />
            <Route path="/setting" component={Setting} />
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
    user: state.user,
  };
};
export default connect(mapStateToProps, {
  fetchArticle,
  fetchTags,
  getUserInfo,
})(App);
