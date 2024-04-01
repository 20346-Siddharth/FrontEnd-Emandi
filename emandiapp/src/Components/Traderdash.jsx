import React, { useState,useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../design/admindash.css";
import ModalWindow from "./ModalWindow";
import profileicon from "../media/profile icon.png";


const Traderdash = () => {
  const navigate=useNavigate();
 
  

  //Below states to show specific details on dashboard
  const [tableDatat, setTableDatat] = useState([]);
  //showModel is for Profile
    const [showModal, setShowModal] = useState(false);

    //showPurchase is for Todays Purchase
    const [showPurchase, setShowPurchase] = useState(false);
    const [showHome, setShowHome] = useState(true);
    const [verifyBuyer, setVerifyBuyer] = useState(false);
    const [previousPurchase, setPreviousPurchase] = useState(false);
    const [purchaseForm, setPurchaseForm] = useState(false);

   //All Information of user 
  const [user,setUser]=useState({});
  //Verification Details of Buyer
  const[verifiedUser,setVerifiedUser]=useState({});
//verification Status of Buyer
let buyerStatus;
// if(verifiedUser !== null){
//   buyerStatus=true
// }
  const [verifyBuyerForm, setverifyBuyerForm] = useState({
    buyerID: "",
    account: "",
    ifsc: "",
   
  });
  const handleverifyBuyerFormChange = (e) => {
    const { id, value } = e.target;
    setverifyBuyerForm({
      ...verifyBuyerForm,
      [id]: value
    });
  };

const handleverifyBuyerSubmit=async (e)=>{
  e.preventDefault();
  const data=verifyBuyerForm
  const token = getCookie('token');
  const url = "http://localhost:4000/api/verifyBuyer";
  // const dt="2024-04-12"
  fetch(url, {
      method: "POST",
      headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
},
body: JSON.stringify({ data,token })

  }).then((response)=>response.json())
.then((data) =>{
  if(data.exist){
    alert("ID already Exist")
  }
  else if(data.buyer){
    alert("Verification Done Successfully")
    setVerifiedUser(data.buyer);
  }
 console.log(data)
})
 
}

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

function profile(){
  const token = getCookie('token');
  const url = "http://localhost:4000/api/profile";
  fetch(url, {
      method: "POST",
      headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
},
body: JSON.stringify({ token: token,user:{} })
     
  }).then((response)=>response.json())
.then((data) =>{
//  console.log(data) 
 setUser(data);
//  console.log("User=",user)

})
}
 
function getVerificationStatus(){
  const token = getCookie('token');
  const url = "http://localhost:4000/api/verificationStatus";
  fetch(url, {
      method: "GET",
      headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
},

     
  }).then((response)=>response.json())
.then((data) =>{
if(data.notFound){
   
  buyerStatus=false;
}else{
  setVerifiedUser(data.buyer);
  buyerStatus=true;
}
console.log(data)
console.log("In vaiable",verifiedUser)

}) 

}
    useEffect(() => {
      getVerificationStatus();
        profile();
      fetchCropData();
    },[] );
    
    const fetchCropData = () => {
      fetch("http://localhost:4000/api/getAllCrops")
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // console.log('Fetched data:', data); // Log fetched data
          setTableDatat(data.crops); // Set fetched data to state
          // console.log('tableDatat:', tableDatat); // Log tableDatat after setting
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
    
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    //Functions to controll rendering of Buttons
   const handlesetShowHome=()=>{
    console.log(tableDatat)
    setShowHome(true);
    setVerifyBuyer(false);
    setPreviousPurchase(false);
    setPurchaseForm(false);
    setShowPurchase(false);
   }

   const handlesetVerifyBuyer=()=>{
    setVerifyBuyer(true);
    setShowHome(false);
    setPreviousPurchase(false);
    setPurchaseForm(false);
    setShowPurchase(false);
   }

   const handlesetPreviousPurchase=()=>{
    setPreviousPurchase(true);
    setShowHome(false);
    setVerifyBuyer(false);
    setPurchaseForm(false);
    setShowPurchase(false);
   }

    const handlePurchaseClick = () => {
      setPurchaseForm(true);
      setShowHome(false);
      setShowPurchase(false);
      setVerifyBuyer(false);
      setPreviousPurchase(false);
   
    };
    const handlesetShowPurchase = () => {
      setShowPurchase(true);
      setShowHome(false);
      setPurchaseForm(false);
      setVerifyBuyer(false);
      setPreviousPurchase(false);
   
    };
  // Code for Logout
 
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
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <h2>{user.username}</h2>
          <ul>
            <li>
              <a href="#"onClick={handlesetShowHome}>
                <i className="fas fa-home"></i>Home 
              </a>
            </li>
            <li>
              <a href="#"onClick={handlesetVerifyBuyer}>
                <i className="fas fa-search-dollar"></i>Verify Buyer
              </a>
            </li>
            <li>
              <a href="#"onClick={handlesetShowPurchase}>
                <i className="fas fa-search-dollar"></i>Today Purchase
              </a>
            </li>
            <li>
              <a href="#" onClick={handlesetPreviousPurchase}>
                <i className="fas fa-search-dollar"></i>Previous Purchases
              </a>
            </li>
            <li>
              <a href="#" onClick={handlePurchaseClick}>
                <i className="	fas fa-edit"></i>Purchase Form
              </a>
            </li>
           
          </ul>
        </div>
        <div className="main_content">
          <div className="header">
            Welcome!! {user.username} Dashboard.
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

          {/* Modal window  Showing Profile*/}
          {showModal && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal">
                <span className="modalclose">&times;</span>
                <ModalWindow user={user} />
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
      
            {/* Home */}
            {showHome && (
              <div className="table4">
                
              <table>
                <thead>
                  <tr>
                  <th>Crop </th>
                    <th>Starting Price</th>
                   
                    <th>Closing Price</th>
                  
                  </tr>
                </thead>
                <tbody>
                {tableDatat.map((item, index) => (
                  <tr key={index}>
                    <td>{item.cropname}</td>
                    <td>{item.startingprice}</td>
                    <td>{item.closingprice}</td>
                    
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
            )}


            {/* Verify Buyer if not verified*/}
            {verifyBuyer && !buyerStatus &&(
               <div className="bookslot">
               <div className="form-column2 purchase">
                 <h2>Verification Form</h2>
                 <div>
                   <label htmlFor="field2">Enter ID of Your Choice</label>
                   <input type="text"  name="field2"  id="buyerID" value={verifyBuyerForm.buyerID} onChange={handleverifyBuyerFormChange} />
                   <label htmlFor="field3">Account No.</label>
                   <input type="text"  name="field3" id="account" value={verifyBuyerForm.account} onChange={handleverifyBuyerFormChange}/>
                   <label htmlFor="field4">ifsc</label>
                   <input type="text" name="field4"id="ifsc" value={verifyBuyerForm.ifsc} onChange={handleverifyBuyerFormChange} />
                  <div className="row1">
                     <button className="purchase-button" onClick={handleverifyBuyerSubmit}>
                       <span>Submit</span>
                     </button>
                   </div>
                   </div>
                  </div>
                   </div>
            )}
            {/* If Buyer is Verified Show this  */}
            {
              verifyBuyer && buyerStatus &&(
                <div className="bookslot">
                      <h1>{verifiedUser.buyerID}</h1>
                </div>
 
              )
            }

        {/* Purchase Form  */}
      {purchaseForm &&(
        <div className="bookslot">
        <div className="form-column2 purchase">
          <h2>Purchase Form</h2>
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
              <button className="purchase-button">
                <span>Submit</span>
              </button>
            </div>
            </div>
           </div>
            </div>
            ) }


       {/* Today's Purchase  */}
      {showPurchase && (
      
         
      <div className="table4">
       <table>
         <thead>
           <tr>
           <th>Farmer</th>
             <th>Mobile</th>
            
             <th>Crop Name</th>
             <th>Estimated weight </th>
             <th>weight </th>
             <th>Price</th>
             <th>Date</th>
             <th>Time</th>
           </tr>
         </thead>
         <tbody>
         {tableDatat.map((item, index) => (
           <tr key={index}>
             <td>{item.farmer}</td>
             <td>{item.mobile}</td>
             <td>{item.cropname}</td>
             <td>{item.estimateweight}</td>
             <td>{item.weight}</td>
             <td>{item.price}</td>
           
     
             <td>{item.date}</td>
             <td>{item.time}</td>
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

export default Traderdash
