import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { Alert } from "reactstrap";
import { clearErrors } from "../../actions/errorActions";

export class Register extends Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    phoneno: "",
    Address: "",
    pincode: "",
    gender: "",
    role: "",
    profilepic: "uploaded",
    profilepicparse: "",
    msg: null
  };

  static propTypes = {
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({ profilepicparse: event.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      username,
      email,
      firstname,
      lastname,
      password,
      password2,
      phoneno,
      Address,
      pincode,
      gender,
      role,
      profilepic,
      profilepicparse
    } = this.state;

    if (password !== password2) {
      this.setState({ msg: "Passwords did not match" });
      return;
    } else {
      const newUser = {
        username,
        email,
        firstname,
        lastname,
        password,
        phoneno,
        Address,
        pincode,
        gender,
        role,
        profilepic,
        profilepicparse
      };

      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      this.props.clearErrors();
      return <Redirect to="/" />;
    }

    const {
      username,
      email,
      firstname,
      lastname,
      password,
      password2,
      phoneno,
      Address,
      pincode,
      gender,
      role,
      profilepicparse
    } = this.state;

    return (
      <div className="whole_body2 body2">
        <header className="header2">
          <div className="ls-container2">
            <h1 className="ls-container__login2" style={{ fontSize: "2.5rem" }}>
              Signup
            </h1>
          </div>

          <form
            onSubmit={this.onSubmit}
            encType="multipart/form-data"
            className="signup-form2 form"
          >
            <div className="form__group2">
              <input
                type="text"
                className="form__input2 fix"
                name="username"
                onChange={this.onChange}
                value={username}
                id="user_name-1"
                placeholder="Username"
              />
              <label htmlFor="user_name-1" className="form__label2">
                Username
              </label>
            </div>
            <div className="form__group2">
              <input
                type="email"
                className="form__input2 fix"
                name="email"
                onChange={this.onChange}
                value={email}
                id="email"
                placeholder="Email Address"
              />
              <label htmlFor="email" className="form__label2">
                Email Address
              </label>
            </div>
            <div className="form__group2">
              <input
                type="text"
                className="form__input2 fix"
                name="firstname"
                onChange={this.onChange}
                value={firstname}
                id="first_name"
                placeholder="First Name"
              />
              <label htmlFor="first_name" className="form__label2">
                First name
              </label>
            </div>
            <div className="form__group2">
              <input
                type="text"
                className="form__input2 fix"
                name="lastname"
                onChange={this.onChange}
                value={lastname}
                id="last_name"
                placeholder="Last Name"
              />
              <label htmlFor="last_name" className="form__label2">
                Last name
              </label>
            </div>
            <div className="form__group2">
              <input
                type="password"
                className="form__input2 fix"
                name="password"
                onChange={this.onChange}
                value={password}
                id="password-1"
                placeholder="Password"
              />
              <label htmlFor="password-1" className="form__label2">
                Password
              </label>
            </div>
            <div className="form__group2">
              <input
                type="password"
                className="form__input2 fix"
                name="password2"
                onChange={this.onChange}
                value={password2}
                id="re_password"
                placeholder="Confirm Password"
              />
              <label htmlFor="re_password" className="form__label2">
                Confirm Password
              </label>
            </div>
            <div className="form__group2">
              <input
                type="text"
                className="form__input2 fix"
                name="phoneno"
                onChange={this.onChange}
                value={phoneno}
                id="phone_no"
                placeholder="Phone Number"
              />
              <label htmlFor="phone_no" className="form__label2">
                Phone Number
              </label>
            </div>
            <div className="form__group2">
              <input
                type="text"
                className="form__input2 fix"
                name="Address"
                onChange={this.onChange}
                value={Address}
                id="address"
                placeholder="Address"
              />
              <label htmlFor="address" className="form__label2">
                Address
              </label>
            </div>
            <div className="form__group2">
              <input
                type="text"
                className="form__input2 fix"
                name="pincode"
                onChange={this.onChange}
                value={pincode}
                id="pin_code"
                placeholder="Pincode"
              />
              <label htmlFor="pin_code" className="form__label2">
                PinCode
              </label>
            </div>

            <div className="form__group2 signup-form__radio2">
              <div className="form__radio-group2">
                <input
                  type="radio"
                  className="form__radio-input2"
                  id="small-male"
                  onChange={this.onChange}
                  name="gender"
                  value="male"
                />
                <label htmlFor="small-male" className="form__radio-label2">
                  <span className="form__radio-button2"></span>
                  Male
                </label>
              </div>

              <div className="form__radio-group2">
                <input
                  type="radio"
                  className="form__radio-input2"
                  id="small"
                  onChange={this.onChange}
                  name="gender"
                  value="female"
                />
                <label htmlFor="small" className="form__radio-label2">
                  <span className="form__radio-button2"></span>
                  Female
                </label>
              </div>
            </div>
            <div className="form__group2 signup-form__radio2">
              <div className="form__radio-group2">
                <input
                  type="radio"
                  className="form__radio-input2"
                  id="small-customer"
                  onChange={this.onChange}
                  name="role"
                  value="customer"
                />
                <label htmlFor="small-customer" className="form__radio-label2">
                  <span className="form__radio-button2"></span>
                  Customer
                </label>
              </div>

              <div className="form__radio-group2">
                <input
                  type="radio"
                  className="form__radio-input2"
                  id="small-designer"
                  onChange={this.onChange}
                  name="role"
                  value="designer"
                />
                <label htmlFor="small-designer" className="form__radio-label2">
                  <span className="form__radio-button2"></span>
                  Designer
                </label>
              </div>
            </div>
            <div className="form__group2">
              <input
                type="file"
                className="form__input2"
                name="profilepicparse"
                onChange={this.fileSelectedHandler}
                // value={profilepicparse.name}
                id="profilepic_parse"
                placeholder="Upload pic"
              />
              <label htmlFor="profliepic_parse" className="form__label2">
                Upload pic
              </label>
            </div>
            <div className="form__group2 btn__signup2">
              {/* <button type="submit" className="btn">
                Register &rarr;
              </button> */}
              <input
                type="submit"
                className="ls-container__login2 btn btn--pink btn--large"
                style={{ color: "white" }}
                value=" Register &rarr;"
              />
            </div>
            <div style={{ fontSize: "2rem" }}>
              Already have an account? <Link to="/login">Login</Link>
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

export default connect(mapStateToProps, { register, clearErrors })(Register);
