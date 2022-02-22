import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Pages
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Register from "./pages/auth/register/Register";
import MailSuccess from "./pages/auth/register/MailSuccess"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/mailsuccess" element={<MailSuccess/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
