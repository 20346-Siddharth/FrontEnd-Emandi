import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../design/admindash.css";
import ModalWindow from "./ModalWindow";
import profileicon from "../media/profile icon.png";
const Updateprice = () => {
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
        <div className="wrapper">
          <div className="sidebar">
            <h2>Admin</h2>
            <ul>
            <li>
              <a href="/">
                <i className="fas fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="/admin">
                <i className="fas fa-user"></i>User Detail
              </a>
            </li>
            <li>
              <a href="/token">
                <i className="fas fa-blog"></i>Token Number
              </a>
            </li>
            <li>
              <a href="/updateprice">
                <i className="fas fa-rupee-sign"></i>Update price
              </a>
            </li>
            <li>
              <a href="/yesterdayprice">
                <i className="fas fa-dollar-sign"></i>Yesterday Price
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-address-book"></i>History
              </a>
            </li>
          </ul>
          </div>
          <div className="main_content">
            <div className="header">
              Welcome!! Admin Dashboard.
              <div className="icon">
                <i className="fa fa-bell icon"></i>
                <Link to="/adminlogin">
                  {" "}
                  <i className="fas fa-sign-in-alt"></i>
                </Link>
                {/* Profile button */}
                <div className="modal">
                  <img
                    src={profileicon}
                    alt="profile icon"
                    className="profileiconmodal"
                    onClick={openModal}
                  />
                </div>
              </div>
            </div>
  
            {/* Modal window */}
            {showModal && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal">
                  <span className="modalclose">&times;</span>
                  <ModalWindow />
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="Update">
         
        <div className="form-column2">
           <h2>Update Crop Price</h2>
          
              <label htmlFor="field2">Token Number</label>
              <input type="text" id="field2" name="field2" />
              <label htmlFor="field3">Price</label>
              <input type="text" id="field3" name="field3" />
              <label htmlFor="field4">Crop</label>
              <input type="text" id="field4" name="field4" />
              <label htmlFor="field4">Weight</label>
              <input type="text" id="field4" name="field4" />
              <label htmlFor="field4">Buyer</label>
              <input type="text" id="field4" name="field4" />
              <div className="row1">
                <button>
                  <span>Submit</span>
                </button>
              </div>
            </div>
        </div>
      </>
    );
  };

export default Updateprice
