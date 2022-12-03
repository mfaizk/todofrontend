import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import "react-toastify/dist/ReactToastify.css";
import TaskHomeScreen from "./screens/taskScreens/TaskHomeScreen";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1000} />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/home/:todo/:todoId" element={<TaskHomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
