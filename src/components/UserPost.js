import React from "react";
import { connect } from "react-redux";
import { postComment } from "../action";
import Comment from "./Comment";

import { POST_ARTICLE } from "../action/Type";

class userPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }

  componentDidMount() {
    let { slug } = this.props.postArticle;
    console.log(slug);
    let url = `https://conduit.productionready.io/api/articles/${slug}`;
    fetch(url, { method: "GET", headers: "application/json" })
      .then((res) => res.json())
      .then(({ article }) => {
        this.props.dispatch({ type: POST_ARTICLE, payload: article });
      });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        {/* <div className="container">
          <div className="flex-2 margin">
            <Link className="logo" to="/userpost">
              <p className="feed">Your Feed</p>
            </Link>
            <Link className="logo" to="#">
              <p className="logo_name">{title}</p>
            </Link>
          </div>
        </div> */}
        {/* <article>
          <div className="container">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src={`${image}`} alt="user_image" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{title}</strong>
                  <small>{(bio && bio) || "no bio"}</small>
                  <small>{username || "no username"}</small>
                  <br />
                  <p>{description}</p>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <textarea
                    class="textarea"
                    placeholder="Add a comment..."
                    value={body}
                    name="body"
                    onChange={this.handleChange}
                  ></textarea>
                </p>
              </div>
              <nav class="level">
                <div class="level-left">
                  <div class="level-item">
                    <button class="button is-info" onClick={this.handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </nav>
              <Comment />
            </div>
          </div>
        </article> */}
      </>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    postArticle: state.postArticle,
    comment: state.comment,
  };
};
export default connect(MapStateToProps)(userPost);
