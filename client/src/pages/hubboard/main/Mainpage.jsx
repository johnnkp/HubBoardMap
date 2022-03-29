import React from "react";
import { MainLayout } from "../../../components/Layout";
import { Todo } from "../../../components/UI";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../store/slice/auth";

const Mainpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/user/logout");
      if (res.data.success) {
        dispatch(authActions.logout());
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <MainLayout>
      <Todo />
      <button onClick={handleLogout}>logout</button>
    </MainLayout>
  );
};

export default Mainpage;
