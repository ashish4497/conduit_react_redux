import React from "react";
import { connect } from "react-redux";
import { postComment } from "../action";

class userPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const commentUrl =
      "https://conduit.productionready.io/api/articles/aa-8c9ph6/comments";
    this.props.dispatch(postComment(commentUrl, this.state));
  };

  render() {
    const postArticle = this.props.postArticle;
    console.log(postArticle, "check the lg f article");
    console.log(postArticle.author, "check the lg f article");
    console.log(postArticle.author, "check the lg f article");
    const { comment } = this.state;
    return (
      <>
        <article>
          <div className="container">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <textarea
                    class="textarea"
                    placeholder="Add a comment..."
                    value={comment}
                    name="comment"
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
            </div>
          </div>
        </article>
      </>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    postArticle: state.postArticle,
  };
};
export default connect(MapStateToProps)(userPost);
