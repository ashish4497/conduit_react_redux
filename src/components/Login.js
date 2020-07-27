import React from "react";

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

  // handleSubmit = () => {
  //   fetch("https://conduit.productionready.io/api/users/login").then(res => {
  //     res.json().then({ user })=> {

  //     }
  //   })
  // };
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
export default Login;
