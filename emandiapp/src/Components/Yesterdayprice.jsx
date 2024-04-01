import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../design/admindash.css";
import ModalWindow from "./ModalWindow";
import profileicon from "../media/profile icon.png";

const Yesterdayprice = () => {
  const [tableYData, setTableYData] = useState([]);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    useEffect(() => {
      // Fetch data from an API endpoint or any other data source
      fetchData();
    }, []);
  
    const fetchData = () => {
      // Sample data for demonstration purposes
      const data = [
        { tokenNumber: "001", cropName: "Wheat", price: 100, weight: "10kg", buyer: "John Doe" },
        { tokenNumber: "002", cropName: "Rice", price: 120, weight: "12kg", buyer: "Jane Smith" },
        // Add more data as needed
      ];
      setTableYData(data);
    };
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
        
        <div className="allcontent">
          <div className="table1">
          <table>
            <thead>
              <tr>
                <th>Token Number</th>
                <th>Crop Name</th>
                <th>Price</th>
                <th>Estimated weight </th>
                <th>Buyer</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate table with dynamic data */}
              {tableYData.map((item, index) => (
                <tr key={index}>
                  <td>{item.tokenNumber}</td>
                  <td>{item.cropName}</td>
                  <td>{item.price}</td>
                  <td>{item.weight}</td>
                  <td>{item.buyer}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        
        </div>
   
      </>
    );
  };

export default Yesterdayprice
