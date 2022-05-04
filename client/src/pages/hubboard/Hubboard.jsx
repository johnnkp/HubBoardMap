/* PROGRAM login stub - login router
 * PROGRAMMER: SzelamC
 * VERSION 1: written 28-02-2022
 * Revision 1.1: 04-05-2022 add code comment
 * PURPOSE: Use React Router Outlet to simplify login and logout routing.
 * DATA STRUCTURE:
 * import React
 * import Outlet - react-router-dom
 * Variable HubboardMain - export default const */

import React from "react";
import {Outlet} from "react-router-dom";

const HubboardMain = (props) => {
  const isAuthenticated = props?.isAuthenticated;
  // console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Outlet/>;
  }
  return <h1>You are not login</h1>;
};

export default HubboardMain;
