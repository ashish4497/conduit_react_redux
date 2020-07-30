import React from "react";
import { connect } from "react-redux";
import { fetchComment } from "../action";
class Comment extends React.Component {
  componentDidMount() {
    var url =
      "https://conduit.productionready.io/api/articles/title-kndazq/comments";
    this.props.dispatch(fetchComment(url));
  }

  render() {
    const comment = this.props.comment;
    return (
      <>
        <div class="content">
          <p>
            {comment &&
              comment.map((val) => {
                return (
                  <>
                    <p>{val.body}</p>
                    <p class="image is-64x64">
                      <img src={`${val.author.image}`} alt="user_image" />
                    </p>

                    <p>{val.author.username || "no username"}</p>
                    <br />
                    <p>{val.author.bio || "no bio"}</p>
                  </>
                );
              })}
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comment: state.getComment,
  };
};

export default connect(mapStateToProps)(Comment);
