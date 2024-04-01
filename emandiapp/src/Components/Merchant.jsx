import React from 'react'
import "../design/adminpage.css";
import { Link } from "react-router-dom";
import profileicon from "../media/profile icon.png";
const Merchant = () => {
  return (
    <div>
        <div className="signupcontainer">
      <div className="page">
        <div className="container">
          <div className="left">
          <img src={profileicon} alt="profile icon" className="profileicon" />
            <div className="login">Merchnat Signup</div>
            <div className="eula">Krishi-Mandi Registration</div>
          </div>
          <div className="right">
            <div className="form">
              <div className="row">
                <div className="input-container">
                  <label htmlFor="Name">Name</label>
                  <input type="Name" id="Name" />
                </div>
                <div className="input-container">
                  <label htmlFor="Mobile-Number">Mobile-Number</label>
                  <input type="Mobile-Number" id="Mobile-Number" />
                </div>
              </div>
              <div className="row">
                <div className="input-container">
                  <label htmlFor="Aadhar">Aadhar</label>
                  <input type="Aadhar" id="Aadhar" />
                </div>
                <div className="input-container">
                  <label htmlFor="Address">Address</label>
                  <input type="Address" id="Address" />
                </div>
              </div>
              <div className="row">
                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <div className="input-container">
                  <label htmlFor="Confirm password">Confirm-Password</label>
                  <input type="password" id="confirmPassword" />
                </div>
              </div>
              <div className="row">
                <Link to="/">
                <button>
                  <span>Submit</span>
                </button>
                </Link>
              </div>
            </div>
            <div className="bottomLine">
              
            <h3>Alredy have an account?click <Link to="/login">  Login</Link> </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Merchant
