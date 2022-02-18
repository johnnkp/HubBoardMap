import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing Pages
import Home from "./Pages/Home/Home";
// import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
