import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../store/slice/auth";

const Mainpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post("/api/user/logout");
      if (res.data.success) {
        dispatch(authActions.logout());
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div>
      <h1>You in mainpage</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Mainpage;
