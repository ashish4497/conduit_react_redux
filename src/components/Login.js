import React from "react";
import { USER_INFO } from "../action/Type";
import { connect } from "react-redux";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    var url = "https://conduit.productionready.io/api/users/login";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/");
        }
        return res.json();
      })
      .then(({ user }) => {
        console.log(user, "check the user");

        localStorage.setItem("authToken", user.token);
        return this.props.dispatch({ type: USER_INFO, payload: user });
      })
      .catch((err) => console.log(err));
    // .this(({ user }) => console.log(user));
  };

  render() {
    let { email, password } = this.state;
    return (
      <>
        <div className="container padding">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                type="submit"
                className="button is-success"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default connect()(Login);
