import React, { Component } from "react";
import LoginMessage from "./LoginMessage";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      serverResponse: null
    };
  }

  _onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const serverResponse = this.props.handleSubmit(
      this.state.username,
      this.state.password
    );
    this.setState(
      {
        serverResponse
      },
      () => {
        console.log("server response is: ", serverResponse);
      }
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this._handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => {
                this._onChange(event);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={(event) => this._onChange(event)}
            />
          </label>
          <button type="submit">Log In</button>
        </form>
        {!!this.state.serverResponse ? (
          <LoginMessage {...this.state.serverResponse} />
        ) : null}
      </>
    );
  }
}

export default LoginForm;
