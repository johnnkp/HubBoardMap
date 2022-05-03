/* PROGRAM authentication stub - authentication page router
 * PROGRAMMER: SzelamC
 * VERSION 1: written 03-03-2022
 * Revision 1.1: 03-05-2022 add code comment
 * PURPOSE: Use React Router Outlet to simplify authentication page routing.
 * DATA STRUCTURE:
 * import React
 * import Outlet - react-router-dom
 * Variable Auth - export default const */

import React from "react";
import {Outlet} from "react-router-dom";

// INFO: <Outlet/> for nested route
const Auth = () => {
  return <Outlet/>;
};

export default Auth;
