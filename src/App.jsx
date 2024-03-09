import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import MyBlog from "./pages/MyBlog/MyBlog";
import MyOrders from "./pages/MyOrders/MyOrders";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.root);

  const user = {
    role: "user",
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user.role === "admin" ? true : false}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        /> */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Route>

        {/* <Route
          path="/myblog"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyBlog />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
