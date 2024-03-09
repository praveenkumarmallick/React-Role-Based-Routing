import React from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch({ type: "login" });
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
