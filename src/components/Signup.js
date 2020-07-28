import React from "react";
import { connect } from "react-redux";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    var url = "https://conduit.productionready.io/api/users";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.history.push("/Login");
      }
    });
  };

  render() {
    let { username, email, password } = this.state;
    console.log(this.state);
    return (
      <>
        <div className="container padding">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="userName"
                value={username}
                name="username"
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success" onClick={this.handleSubmit}>
                Signup
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Signup);
