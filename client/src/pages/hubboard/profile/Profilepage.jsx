import React from "react";
import { MainLayout } from "../../../components/Layout";
import { Stack, Typography } from "@mui/material";
import ProfileDetails from "./ProfileDetails";

const Profilepage = () => {
  return (
    <MainLayout profilepage={true}>
      <ProfileDetails />
    </MainLayout>
  );
};

export default Profilepage;
