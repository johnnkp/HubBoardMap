/* PROGRAM Profilepage.jsx - profile management interface wrapper
 * PROGRAMMER: SzelamC
 * VERSION 1: written 30-03-2022
 * Revision 1.1: 04-05-2022 add code comment
 * PURPOSE: Use React Router to simplify frameset and iframe.
 * DATA STRUCTURE:
 * import React
 * import MainLayout - main interface module
 * import ProfileDetails - profile detail module
 * Variable Mainpage - export default const */

import React from "react";
import {MainLayout} from "../../../components/Layout";
import ProfileDetails from "./ProfileDetails";

const Profilepage = () => {
  return (
    <MainLayout profilepage={true}>
      <ProfileDetails/>
    </MainLayout>
  );
};

export default Profilepage;
