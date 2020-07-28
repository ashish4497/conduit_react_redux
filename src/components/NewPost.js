import React from "react";
import { connect } from "react-redux";
import { postArticle } from "../action";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      tagList: "",
      description: "",
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    var postUrl = "https://conduit.productionready.io/api/articles";
    this.props.dispatch(postArticle(postUrl, this.state, this.props.history));
  };

  render() {
    let { title, body, description, tagList } = this.state;
    return (
      <>
        <div className="container padding">
          <div className="control margin">
            <input
              className="input"
              type="text"
              placeholder="Article Title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="control margin">
            <input
              className="input"
              type="text"
              placeholder="Whats this article about ?"
              value={body}
              name="body"
              onChange={this.handleChange}
            />
          </div>
          <textarea
            className="textarea margin"
            placeholder="write yout article"
            value={description}
            name="description"
            onChange={this.handleChange}
          ></textarea>
          <div className="control margin">
            <input
              className="input"
              type="text"
              placeholder="Enter Tags"
              value={tagList}
              name="tagList"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="button is-success margin"
            onClick={this.handleSubmit}
          >
            Publish Article
          </button>
        </div>
      </>
    );
  }
}

export default connect()(Post);
