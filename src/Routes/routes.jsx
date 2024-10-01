import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import { homeContext } from "../Services/UserContext";
import { useState } from "react";

export default function AnimateRoutes() {
  const [username, setUsername] = useState("");
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <homeContext.Provider value={[username, setUsername]}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </homeContext.Provider>
    </AnimatePresence>
  );
}
