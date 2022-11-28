import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
