import React from "react";
import { connect } from "react-redux";
import MainHero from "./Mainhero";

class Userdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Userdetail: {},
    };
  }
  handleClick = () => {
    var url = `https://conduit.productionready.io/api/profiles/${this.props.match.params.slug}/follow`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
    })
      .then((res) => res.json())
      .then(({ profile }) => {
        this.setState({ Userdetail: profile });
      });
  };

  componentDidMount() {
    var url = `https://conduit.productionready.io/api/profiles/${this.props.match.params.slug}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ profile }) => {
        this.setState({ Userdetail: profile });
      });
  }
  render() {
    const profile = this.state.Userdetail;
    return (
      <>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body center">
            <div className="container">
              <img className="title" src={profile.image} alt="" />
              <h2 className="subtitle">{profile.username}</h2>
              <button className="button" onClick={this.handleClick}>
                {`+ follow ${profile.username}`}
              </button>
            </div>
          </div>
        </section>
        <MainHero />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Userdetail);
