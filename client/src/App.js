import React from "react";
import { Routes, Route } from "react-router-dom";

// import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import MailSuccess from "./pages/auth/register/MailSuccess";
import MailVerification from "./pages/auth/register/MailVerification";
import HubboardMain from "./pages/hubboard/HubboardMain";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="mailsuccess" element={<MailSuccess />} />
          <Route path=":token" element={<MailVerification />} />
        </Route>
        <Route path="/hubboard" element={<HubboardMain />}></Route>
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
  );
};

export default App;
