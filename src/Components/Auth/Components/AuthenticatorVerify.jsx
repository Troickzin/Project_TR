import React, { useContext, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";
import {
  Authenticator_Login,
  Authenticator_Register,
} from "../../../Services/Authenticator";
import { AuthenticatorVerifyStyled } from "./Authenticator.Style";
import { homeContext } from "../../../Services/UserContext";

export function AuthenticatorVerify(props) {
  const navigate = useNavigate();
  const Info = {
    Login: {
      Button: "Login",
      Desc: "Don't have an account?",
      Red: "Sign Up",
      Action: "/auth/register",
      buttonAction: Authenticator_Login,
    },
    Register: {
      Button: "Register",
      Desc: "Already have an account?",
      Red: "Sign In",
      Action: "/auth/login",
      buttonAction: Authenticator_Register,
    },
  };
  const [username, setUsername] = useContext(homeContext);

  async function clickButton(e) {
    e.preventDefault();
    if (props.Type == "Login") {
      const dados = await Authenticator_Login();
      if (dados.data.logado) {
        navigate("/");
        console.log(dados.data.msg);
        setUsername(dados.data.user_info.username);
      }
    } else if (props.Type == "Register") {
      const dados = await Authenticator_Register();
      if (dados.data.logado) {
        navigate("/");
        setUsername(dados.data.user_info.username);
      }
      console.log(dados.data.msg);
    }
  }

  useEffect(() => {
    const button = document.getElementById("Auth_Button");
    button.disabled = true;
  });

  return (
    <AuthenticatorVerifyStyled>
      <button
        id="Auth_Button"
        onClick={(e) => {
          {
            clickButton(e);
          }
        }}
      >
        {Info[props.Type].Button}
      </button>
      <p>
        {Info[props.Type].Desc}
        <span
          onClick={(e) => {
            navigate(Info[props.Type].Action);
          }}
        >
          {" " + Info[props.Type].Red}
        </span>
      </p>
    </AuthenticatorVerifyStyled>
  );
}
