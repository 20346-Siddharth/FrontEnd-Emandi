import React from 'react';
import "../design/admindash.css";
import profileicon from "../media/profile icon.png";

const ModalWindow = ({user}) => {
 //This is the Profile page for all users
  return (
    <div className="profile-container">
      <h2 className="profile-heading"> <img
                  src={profileicon}
                  alt="profile icon"
                  className="profileiconmodal"
                 
                />Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.username}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Aadhar:</strong> {user.adhar}</p>
        <p><strong>Category:</strong> {user.category}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default ModalWindow;
