import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile, UpdateUserProfile } from "../../actions/authActions";
import { Alert } from "reactstrap";
import { Redirect } from "react-router-dom";
import ReactTimeout from "react-timeout";
import Navbar from "../Navbar";
import AppNavbar from "../AppNavbar";
import "./Showprofile.css";
import Footer from "../Footer";

// import "../../css/style.css";

export class ShowProfile extends Component {
  state = {
    showProfileChangeInfo: true,
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    Address: "",
    pincode: "",
    profilepic: "",
    profilepicparse: "",
    msg: null,
    reload: null
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "UPDATE_FAIL") {
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

  onShowClick = e => {
    if (this.state.showProfileChangeInfo === true) {
      this.setState({
        email: this.props.userprofile.email,
        firstname: this.props.userprofile.firstname,
        lastname: this.props.userprofile.lastname,
        phoneno: this.props.userprofile.phoneno,
        Address: this.props.userprofile.Address,
        pincode: this.props.userprofile.pincode
      });
    }
    this.setState({
      showProfileChangeInfo: !this.state.showProfileChangeInfo
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      email,
      firstname,
      lastname,
      phoneno,
      Address,
      pincode,
      profilepic,
      profilepicparse
    } = this.state;

    if (email === "") {
      this.setState({ msg: "email should  not be empty" });
      return;
    } else if (firstname === "") {
      this.setState({ msg: "firstname should not be empty" });
      return;
    } else if (lastname === "") {
      this.setState({ msg: "lastname should not be empty" });
      return;
    } else if (phoneno === "") {
      this.setState({ msg: "phoneno should not be empty" });
      return;
    } else if (Address === "") {
      this.setState({ msg: "Address should not be empty" });
      return;
    } else if (pincode === "") {
      this.setState({ msg: "pincode should not be empty" });
      return;
    } else {
      const updatedUser = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        phoneno: phoneno,
        Address: Address,
        pincode: pincode,
        profilepic: profilepic,
        profilepicparse: profilepicparse
      };

      console.log(updatedUser);

      this.props.UpdateUserProfile(updatedUser);

      this.setState({
        showProfileChangeInfo: !this.state.showProfileChangeInfo
      });
    }
  };

  static propTypes = {
    getProfile: PropTypes.func.isRequired,
    userprofile: PropTypes.object.isRequired,
    UpdateUserProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  setData = () => {
    this.setState({ reload: true });
  };

  componentDidMount() {
    this.props.getProfile();
    this.props.setTimeout(this.setData, 150);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    if (!isAuthenticated && this.state.reload) {
      return <Redirect to="/home/Men" />;
    }

    const source = "http://localhost:5000/";

    const { showProfileChangeInfo } = this.state;

    const {
      email,
      firstname,
      lastname,
      phoneno,
      Address,
      pincode,
      profilepicparse
    } = this.state;

    var img = "";
    if (this.props.userprofile) {
      img = this.props.userprofile.profilepic.replace("uploads/", "");
      console.log(typeof this.props.userprofile.profilepic);
    }
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: "7rem" }}>
          <h2
            style={{
              textAlign: "center"
            }}
            className="your-profile "
            style={{ color: "var(--color-primary)" }}
          >
            Your Profile &nbsp;&nbsp;
            <i
              // style={{ cursor: "pointer" }}
              // onClick={this.onShowClick}
              className="fas fa-user-edit"
            />
          </h2>

          {showProfileChangeInfo ? (
            <div>
              {this.props.userprofile ? (
                <header className="header2">
                  <div className="propic-div">
                    <h2>
                      <img
                        style={{ marginTop: "-15rem" }}
                        className="profilePicClass profilepic-showpro"
                        src={source + img}
                        alt="Avatar"
                      />
                    </h2>
                  </div>

                  <div
                    className="details showpro-details"
                    style={{ marginTop: "-15rem" }}
                  >
                    <div>
                      <h3>UserName &nbsp;:</h3>
                      <span>
                        &nbsp; &nbsp;{this.props.userprofile.username}
                      </span>
                    </div>
                    <div>
                      <h3>FirstName &nbsp;:</h3>
                      <span>
                        &nbsp; &nbsp;{this.props.userprofile.firstname}
                      </span>
                    </div>
                    <div>
                      <h3>LastName &nbsp;:</h3>
                      <span>
                        &nbsp; &nbsp;{this.props.userprofile.lastname}
                      </span>
                    </div>
                    <div>
                      <h3>PhoneNumber &nbsp;:</h3>
                      <span>&nbsp; &nbsp;{this.props.userprofile.phoneno}</span>
                    </div>

                    <div>
                      <h3>Email &nbsp;:</h3>
                      <span>&nbsp; &nbsp;{this.props.userprofile.email}</span>
                    </div>
                  </div>
                </header>
              ) : null}
            </div>
          ) : (
            <div className="whole_body">
              <header className="header">
                <div className="ls-container">
                  <h1
                    className="ls-container__signup active btn--small"
                    style={{ color: "black" }}
                  >
                    Edit Profile
                  </h1>
                </div>

                {this.state.msg ? (
                  <span
                    style={{ textAlign: "center", display: "inline-block" }}
                  >
                    <Alert color="danger"> {this.state.msg} </Alert>
                  </span>
                ) : null}
                <form
                  onSubmit={this.onSubmit}
                  encType="multipart/form-data"
                  className="signup-form form"
                >
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      name="email"
                      onChange={this.onChange}
                      value={email}
                      id="email"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="form__label">
                      Email Address
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="firstname"
                      onChange={this.onChange}
                      value={firstname}
                      id="first_name"
                      placeholder="First Name"
                    />
                    <label htmlFor="first_name" className="form__label">
                      First name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="lastname"
                      onChange={this.onChange}
                      value={lastname}
                      id="last_name"
                      placeholder="Last Name"
                    />
                    <label htmlFor="last_name" className="form__label">
                      Last name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="phoneno"
                      onChange={this.onChange}
                      value={phoneno}
                      id="phone_no"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone_no" className="form__label">
                      Phone Number
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="Address"
                      onChange={this.onChange}
                      value={Address}
                      id="address"
                      placeholder="Address"
                    />
                    <label htmlFor="address" className="form__label">
                      Address
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      name="pincode"
                      onChange={this.onChange}
                      value={pincode}
                      id="pin_code"
                      placeholder="Pincode"
                    />
                    <label htmlFor="pin_code" className="form__label">
                      PinCode
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="file"
                      className="form__input"
                      name="profilepicparse"
                      onChange={this.fileSelectedHandler}
                      // value={profilepicparse.name}
                      id="profilepic_parse"
                      placeholder="Upload pic"
                    />
                    <label htmlFor="profliepic_parse" className="form__label">
                      Upload pic
                    </label>
                    <h2>
                      <img
                        src={source + img}
                        className="profilePicClass"
                        alt="Avatar"
                      />
                    </h2>
                  </div>

                  <div className="form__group btn__signup">
                    <input
                      type="submit"
                      className="ls-container__login btn--small btn"
                      style={{ color: "white" }}
                      value=" Update &rarr;"
                    />
                  </div>
                </form>
              </header>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userprofile: state.auth.user,
  auth: state.auth,
  error: state.error
});

export default ReactTimeout(
  connect(mapStateToProps, { getProfile, UpdateUserProfile })(ShowProfile)
);
