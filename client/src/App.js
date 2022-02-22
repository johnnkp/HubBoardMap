import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import MailSuccess from "./pages/auth/register/MailSuccess";
import MailVerification from "./pages/auth/register/MailVerification";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="mailsuccess" element={<MailSuccess />} />
          <Route path=":token" element={<MailVerification />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
