import React from "react";
import ResendEmail from "../../components/Helpers/ResendEmail"
import axios from "axios";

const ForgotPassword = () => {
  const resendForgotPasswordEmail = async (values, action) => {
    try {
      const res = await axios.post("/api/auth/resetPasswordEmail", values);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };

  return (
    <ResendEmail resendEmailHandler={resendForgotPasswordEmail} type={2}>
      Forgot password email has been send, please check again your email
    </ResendEmail>
  );
};

export default ForgotPassword;
