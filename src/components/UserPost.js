import React from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { fetchComment } from "../action";

class userPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      articles: {},
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    var url =
      "https://conduit.productionready.io/api/articles/s-nqtjl6/comments";
    this.props.dispatch(fetchComment(url));
  };

  componentDidMount() {
    var url =
      "https://conduit.productionready.io/api/articles/feed?limit=10&offset=0";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
    })
      .then((res) => res.json())
      .then(({ articles }) => this.setState({ articles: articles }));
  }
  render() {
    const { body } = this.state;
    const { article } = this.props;
    if (article.author) {
      var {
        title,
        // body,
        description,
        author: { username, bio, image },
      } = article;
    } else {
      return "No article post yet";
    }
    return (
      <>
        <article>
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
        </article>
      </>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    article: state.postArticle,
    comment: state.comment,
  };
};
export default connect(MapStateToProps)(userPost);
