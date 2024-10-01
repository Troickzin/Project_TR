import Api from "./API/API";

import { InputsInfos } from "../Components/Auth/Components/Authenticator";
import { redirect } from "react-router-dom";

import { useContext, useState } from "react";

export async function Authenticator_Login(e) {
  const dados = await Api.post("/Auth/Login", {
    email: InputsInfos.email,
    password: InputsInfos.password,
  });

  if (dados.data.logado) {
    localStorage.setItem("Access_Token", dados.data.token);
    localStorage.setItem("User_Info", JSON.stringify(dados.data.user_info));
  }

  return dados;
}

export async function Authenticator_Register(e) {
  const dados = await Api.post("/Auth/Register", {
    username: InputsInfos.username,
    email: InputsInfos.email,
    password: InputsInfos.password,
  });

  if (dados.data.logado) {
    localStorage.setItem("Access_Token", dados.data.token);
    localStorage.setItem("User_Info", JSON.stringify(dados.data.user_info));
  }

  // console.log(dados);
  return dados;
}

export function Authenticator_Inputs_Changes(Input, Type) {
  InputsInfos[Type] = Input.target.value;

  const button = document.getElementById("Auth_Button");
  console.log(InputsInfos);
  if (
    String(InputsInfos.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
    InputsInfos.password.length >= 8
  ) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
