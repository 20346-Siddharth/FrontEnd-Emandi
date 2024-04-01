import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../design/admindash.css";
import ModalWindow from "./ModalWindow";
import profileicon from "../media/profile icon.png";

const Farmerdash = () => {
  const [tableFData, setTableFData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showBookSlot, setShowBookSlot] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
   
    fetchData();
  }, []);

  const fetchData = () => {
    
    const data = [
      { tokenNumber: "001", cropName: "Wheat", price: 100, weight: "10kg", buyer: "John Doe" },
      { tokenNumber: "002", cropName: "Rice", price: 120, weight: "12kg", buyer: "Jane Smith" },
   
    ];
    setTableFData(data);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBookSlotClick = () => {
    setShowBookSlot(true);
    setShowProcess(false); // Hide Process
    setShowHistory(false); // Hide History
  };

  const handleProcessClick = () => {
    setShowProcess(true);
    setShowBookSlot(false); // Hide Book Slot
    setShowHistory(false); // Hide History
  };

  const handleHistoryClick = () => {
    setShowHistory(true);
    setShowBookSlot(false); // Hide Book Slot
    setShowProcess(false); // Hide Process
  };

  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <h2>Farmer</h2>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="/farmerdash">
                <i className="fas fa-search-dollar"></i>Today Price
              </a>
            </li>
            <li>
              <a href="#" onClick={handleBookSlotClick}>
                <i className="fas fa-user"></i>Book Slot
              </a>
            </li>
            <li>
              <a href="#" onClick={handleProcessClick}>
                <i className="fas fa-sticky-note"></i>Process
              </a>
            </li>
            <li>
              <a href="#" onClick={handleHistoryClick}>
                <i className="fas fa-address-book"></i>History
              </a>
            </li>
          </ul>
        </div>
        <div className="main_content">
          <div className="header">
            Welcome!! Farmer Dashboard.
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
      <div className="allcontent">
        <div className="searchcontent">
          <div className="search1">
            <input type="text" placeholder="Crop..." />
          </div>
          <div className="searchbutton1">
            <button>
              <span>Search</span>
            </button>
          </div>
        </div>

        {showBookSlot ? (
          <div className="bookslot">
            <div className="form-column2 book">
              <h2>Book Slot</h2>
              <div>
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
                  <button className="bookslot-button">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : showProcess ? (
          <div className="process">
            <h2>Process</h2>
            <p>heloo</p>
          </div>
        ) : showHistory ? (
          <div className="history">
            <h2>History</h2>
            <div className="table3">
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
              {tableFData.map((item, index) => (
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
        ) : (
          <div className="table2">
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
              {tableFData.map((item, index) => (
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
        )}
      </div>
    </div>
  );
};

export default Farmerdash;
