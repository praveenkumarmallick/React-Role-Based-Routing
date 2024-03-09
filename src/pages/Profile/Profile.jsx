import React from "react";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
