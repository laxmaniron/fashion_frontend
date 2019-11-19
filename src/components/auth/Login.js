import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { Alert } from "reactstrap";
import "../../css/style.css";

export class Login extends Component {
  state = {
    username: "",

    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(this.state.username, this.state.password);
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home/Men" />;
    }

    const { username, password } = this.state;
    return (
      <div className="whole_body body2">
        <header className="header2 ">
          <div className="ls-container2">
            <h1 className="ls-container__login2" style={{ fontSize: "2.5rem" }}>
              Login
            </h1>
          </div>

          <form className="login-form2 form2" onSubmit={this.onSubmit}>
            <div className="form__group2">
              <input
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}
                id="user_name-2"
                className="form__input2"
                placeholder="UserName"
                style={{ width: "100%" }}
              />
              <label htmlFor="user_name-2" className="form__label2">
                Username
              </label>
            </div>

            <div className="form__group2">
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                value={password}
                id="password-2"
                className="form__input2"
                placeholder="Password"
                style={{ width: "100%" }}
              />
              <label htmlFor="password-2" className="form__label2">
                Password
              </label>
            </div>
            <div className="form__group2">
              {/* <button type="submit" className="btn">
                  Login &rarr;
              </button> */}
              <input
                type="submit"
                className="ls-container__login2 btn btn--pink btn--large"
                value=" Login &rarr;"
              />
            </div>
            <div style={{ fontSize: "2rem" }}>
              Don't Have an account? <Link to="/register">Register</Link>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(mapStateToProps, { login })(Login);
