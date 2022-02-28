import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../store/slice/auth";

const Mainpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authActions.logout());
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  };
  return (
    <div>
      <h1>You in mainpage</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Mainpage;
