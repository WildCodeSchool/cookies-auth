import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Home from "./pages/Home";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
