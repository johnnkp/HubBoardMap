import React from "react";
import { Routes, Route } from "react-router-dom";

// import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import HubboardMain from "./pages/hubboard/HubboardMain";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Register />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/hubboard" element={<HubboardMain />} />
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};

export default App;
