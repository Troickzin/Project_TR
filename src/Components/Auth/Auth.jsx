import { useState, useContext, useEffect } from "react";

import Background from "../Background/Background";
import { MotionDiv } from "../../Pages/Home/Components/Home.Style";
import { motion } from "framer-motion";

import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";

import {
  AuthContainer,
  AuthContainerLogoImg,
  AuthContainerLogoDiv,
} from "../../Pages/Auth/AuthContainer.Style";

import { Authenticator } from "./Components/Authenticator";

import React from "react";

export function LoginContainer() {
  document.title = "TKS Sign In";

  return (
    <>
      <Background />
      <AuthContainer>
        <AuthContainerLogoDiv>
          <AuthContainerLogoImg src="src/assets/Logo/Logo_effect_110.png" />
        </AuthContainerLogoDiv>

        <Authenticator.Root>
          <Authenticator.Title
            Title={"Login"}
            Subtitle={"Please login to continue."}
          />
          <Authenticator.Inputs>
            <Authenticator.Input
              Icon={<HiOutlineMail className="Auth-Login-Input-Icon" />}
              Type="email"
              maxLength={50}
              placeholder="Email"
            />
            <Authenticator.Input
              Icon={<BiLockAlt className="Auth-Login-Input-Icon" />}
              Type="password"
              maxLength={20}
              placeholder="Password"
            />
          </Authenticator.Inputs>

          <Authenticator.Verify Type="Login" />
        </Authenticator.Root>
      </AuthContainer>
    </>
  );
}

export function RegisterContainer() {
  document.title = "TKS Sign Up";

  return (
    <>
      <Background />
      <AuthContainer>
        <AuthContainerLogoDiv>
          <AuthContainerLogoImg src="src/assets/Logo/Logo_effect_110.png" />
        </AuthContainerLogoDiv>

        <Authenticator.Root>
          <Authenticator.Title
            Title={"Register"}
            Subtitle={"Please Register to continue."}
          />
          <Authenticator.Inputs>
            <Authenticator.Input
              Icon={<RiUserLine className="Auth-Login-Input-Icon" />}
              Type="username"
              maxLength={40}
              placeholder="Username"
            />
            <Authenticator.Input
              Icon={<HiOutlineMail className="Auth-Login-Input-Icon" />}
              Type="email"
              maxLength={50}
              placeholder="Email"
            />
            <Authenticator.Input
              Icon={<BiLockAlt className="Auth-Login-Input-Icon" />}
              Type="password"
              maxLength={20}
              placeholder="Password"
            />
          </Authenticator.Inputs>

          <Authenticator.Verify Type="Register" />
        </Authenticator.Root>
      </AuthContainer>
    </>
  );
}
