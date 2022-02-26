import React from "react";
import { Routes, Route } from "react-router-dom";

// import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import { MailSuccess, MailVerification, Register } from "./pages/auth/register";
import HubboardMain from "./pages/hubboard/HubboardMain";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Register />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="mailsuccess" element={<MailSuccess />} />
        <Route path=":token" element={<MailVerification />} />
      </Route>
      <Route path="/hubboard" element={<HubboardMain />}></Route>
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};

export default App;
