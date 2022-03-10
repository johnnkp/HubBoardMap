import React from "react";
import { Wrapper } from "../Helpers"
import { Navbar } from "../UI";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
};

export default Layout;
