import React from "react";
import ".././App.css";
import Header from "./Header";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { fetchArticle, fetchTags, isLogin } from "../action/index";
import Hero from "./Hero";
import Footer from "./Footer";
import Post from "./NewPost";
import UserPost from "./UserPost";

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
    var url = "https://conduit.productionready.io/api/users";
    if (localStorage.authToken) {
      this.props.isLogin(url, localStorage.authToken);
    }
  }
  // publicRoute = () => {
  //   return (
  //     <>
  //       <Switch>
  //         <Route path="/Signup" component={Signup} />
  //         <Route path="/Login" component={Login} />
  //         <Route path="/" component={Hero} />
  //       </Switch>
  //     </>
  //   );
  // };

  // privateRoute = () => {
  //   return <Route path="/post" component={Post} />;
  // };
  render() {
    const user = this.props.user;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/post" component={Post} />
          <Route path="/userpost" component={UserPost} />
          <Route path="/" component={Hero} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
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
export default connect(mapStateToProps, { fetchArticle, fetchTags, isLogin })(
  App
);
