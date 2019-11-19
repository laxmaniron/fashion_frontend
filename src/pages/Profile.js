import React from 'react';

import './../App.css';
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
class Profile extends React.Component {
  render(){

    return (
      <div className="Profile ">
        <Navbar />
        <div className="Profile__page">
          <h1>Profile</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
