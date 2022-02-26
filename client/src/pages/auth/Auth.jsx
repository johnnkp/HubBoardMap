import React from "react";
import { Routes, Route } from "react-router-dom";

import MailSuccess from "./register/MailSuccess";
import MailVerification from "./register/MailVerification";

const Auth = () => {
  return (
    <Routes>
      <Route path="mailsuccess" element={<MailSuccess />} />
      <Route path=":token" element={<MailVerification />} />
    </Routes>
  );
};

export default Auth;
