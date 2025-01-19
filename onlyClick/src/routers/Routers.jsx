import React from "react";
import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage.jsx";
import Login from "../pages/Auth/Login.jsx";
import SignUp from "../pages/Auth/SignUp.jsx";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default Routers;
