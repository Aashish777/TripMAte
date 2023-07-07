import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/Authenticaton/LandingPage";
const TripMateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<h2>Login</h2>} />
      <Route path="register" element={<h2>Register</h2>} />
    </Routes>
  );
};

export default TripMateRoutes;
