import React from "react";
import { connect } from "react-redux";
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
    // console.dir(target, "fghjkl");
    this.setState({ [name]: value });
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
