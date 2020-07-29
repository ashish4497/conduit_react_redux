import React from "react";
import { connect } from "react-redux";
import { fetchComment, fetchArticle } from "../action";
class Comment extends React.Component {
  componentDidMount() {
    var url =
      "https://conduit.productionready.io/api/articles/title-kndazq/comments";
    this.props.dispatch(fetchComment(url));
  }
  t;
  render() {
    const comment = this.comment;
    console.log(comment, "check the comment");
    // if (comment.author) {
    //   var { username, image } = comment;
    // }
    return (
      <>
        <div class="content">
          {/* <p>
            <p class="image is-64x64">
              <img src={`${image}`} alt="user_image" />
            </p>
            <strong>{comment.body || "no content"}</strong>
            <p>{username || "no username"}</p>
            <br />
            <p>{bio || "no bio"}</p>
          </p> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comment: state.comment,
  };
};

export default connect(mapStateToProps)(Comment);
