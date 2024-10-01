import Background from "../../Components/Background/Background";
import HomeTitle from "./Components/HomeTitle";
import { LogoHome, HomeButton, MotionDiv } from "./Components/Home.Style";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";
function redirect(navigate) {
  navigate("/auth/login");
}

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Background />
      <HomeTitle />
      <LogoHome src="src/assets/Logo/home_logo.png" />
      <HomeButton
        onClick={(e) => {
          redirect(navigate);
        }}
      >
        Login
      </HomeButton>
    </>
  );
}

export default Home;
