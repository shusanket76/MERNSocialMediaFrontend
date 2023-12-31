import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome.jsx";
import UserLists from "./components/Users/UserLists.jsx";
import PostLists from "./components/Posts/PostLists.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="users" element={<UserLists />}></Route>
          <Route path="posts" element={<PostLists />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
