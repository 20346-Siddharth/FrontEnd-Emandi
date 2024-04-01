import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../design/admindash.css";
import ModalWindow from "./ModalWindow";
import profileicon from "../media/profile icon.png";

const Admindash = () => {
  const navigate=useNavigate()
  const [showModal, setShowModal] = useState(false); 
  const [tableData, setTableData] = useState([]);
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
    setTableData(data);
  };



  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
  }
  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  const Logout =()=>{
    const token = getCookie('token');
    console.log(token)
    const url = "http://localhost:4000/api/logout";
    fetch(url, {
method: "POST",
headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
},
body: JSON.stringify({ token: token })
}).then((response)=>response.json())
.then((data) => {
// Handle response as needed
if(data.logout){
    deleteCookie("token");
    // window.location.href='./login.html'
    navigate("/login")

}
console.log(data);
}).catch(error => {
console.error('Logout error:', error);
// Handle logout error
});
  }
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
                <i className="fas fa-sign-in-alt"onClick={Logout}></i>
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
          <div className="search">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Crop..." />
          </div>
          <div className="searchbutton">
            <button>
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="table">
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
              {tableData.map((item, index) => (
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

export default Admindash;
