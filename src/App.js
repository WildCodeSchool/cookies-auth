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
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, {
        expires: 1 / 24,
      });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/message" element={<Message userToken={userToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
