import React from "react";
import { Routes, Route } from "react-router-dom";

// INFO: import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Hubboard from "./pages/hubboard/Hubboard";
import { MailSuccess, MailVerification, Register } from "./pages/auth/register";
import { Mainpage } from "./pages/hubboard/main";

// INFO: import useSelector to get the state from redux
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
      <Route path="signup" element={<Register />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="mailsuccess" element={<MailSuccess />} />
        <Route path=":token" element={<MailVerification />} />
      </Route>
      <Route
        path="/hubboard"
        element={<Hubboard isAuthenticated={isAuthenticated} />}
      >
        <Route path="" element={<Mainpage />} />
        <Route path="profile" element={<h1>You in profile page</h1>} />
      </Route>
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};

export default App;
