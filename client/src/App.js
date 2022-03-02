import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
// INFO: import useSelector to get the state from redux
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/slice/auth";

// INFO: import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Hubboard from "./pages/hubboard/Hubboard";
import { MailSuccess, MailVerification, Register, ResendEmail } from "./pages/auth/register";
import GoogleOAuth from "./pages/auth/GoogleOAuth";
import { Mainpage } from "./pages/hubboard/main";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.post("/api/user/authVerify");
        if (res.data.success) {
          dispatch(authActions.login());
          navigate("/hubboard");
        }
      } catch (err) {}
    };
    verify();
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
      <Route path="signup" element={<Register />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="mailsuccess" element={<MailSuccess />} />
        <Route path="resendEmail" element={<ResendEmail/>} / >
        <Route path=":token" element={<MailVerification />} />
      </Route>
      <Route path="/googlecb" element={<GoogleOAuth />} />
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
