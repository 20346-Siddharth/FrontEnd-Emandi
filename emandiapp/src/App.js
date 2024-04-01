import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AdminLogin from "./Components/AdminLogin";
import Login from "./Components/Login";
import Forget from "./Components/Forget";
import Merchant from "./Components/Merchant";
import Farmer from "./Components/Farmer";
import Admindash from "./Components/Admindash";
import ModalWindow from "./Components/ModalWindow";
import Token from "./Components/Token";
import Updateprice from "./Components/Updateprice";
import Yesterdayprice from "./Components/Yesterdayprice";
import Farmerdash from "./Components/Farmerdash";
import Traderdash from "./Components/Traderdash";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/admin" element={<Admindash />} />
          <Route path="/modalwindow" element={<ModalWindow />} />
          <Route path="/token" element={<Token/>} />
          <Route path="/updateprice" element={<Updateprice/>} />
          <Route path="/yesterdayprice" element={<Yesterdayprice/>} />
          <Route path="/farmerdash" element={<Farmerdash/>} />
          <Route path="/traderdash" element={<Traderdash/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
