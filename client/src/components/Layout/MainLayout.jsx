import React from "react";
import { Wrapper } from "../Helpers"
import { Navbar, SideBar } from "../UI";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <SideBar/>
      {children}
    </Wrapper>
  );
};

export default Layout;
