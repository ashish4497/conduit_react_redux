import React from "react";

class Setting extends React.Component {
  render() {
    return (
      <>
        <div className="width container padding ">
          <h3 className="center padding">your settings</h3>
          <div className="control margin">
            <input
              className="input"
              type="text"
              placeholder="URL of your profile"
              onChange={this.handleChange}
            />
          </div>
          <div className="control margin">
            <input
              className="input"
              type="text"
              placeholder="username"
              onChange={this.handleChange}
            />
          </div>
          <textarea
            className="textarea margin"
            onChange={this.handleChange}
          ></textarea>
          <div className="control margin">
            <input
              className="input"
              type="email"
              placeholder="email"
              onChange={this.handleChange}
            />
            <input
              className="input"
              type="password"
              placeholder="new password"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="button is-success margin"
            onClick={this.handleSubmit}
          >
            Update Setting
          </button>
          <div>
            <button
              type="submit"
              className="button is-success margin"
              onClick={this.handleSubmit}
            >
              click here to logout
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Setting;
