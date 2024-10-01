import { useContext, useEffect, useState } from "react";
import { TitleText } from "./Home.Style";
import { AuthenticatorUserStyled } from "../../../Components/Auth/Components/Authenticator.Style";

const User_Info = JSON.parse(localStorage.getItem("User_Info"));
// const Username = User_Info.username;
import { homeContext } from "../../../Services/UserContext";

function HomeTitle() {
  const [username, setUsername] = useContext(homeContext);
  const text = !User_Info
    ? ""
    : String(User_Info.username[0]).toUpperCase() +
      String(User_Info.username.slice(1));
  const usernameText =
    String(username[0]).toUpperCase() + String(username.slice(1));
  return (
    <TitleText>
      Welcome
      <AuthenticatorUserStyled>
        {!User_Info ? " " : " " + username + " "}
      </AuthenticatorUserStyled>
      to <br />
      <span>TKS PROJECT</span>
      <br /> A prototype login and registration
    </TitleText>
  );
}

export default HomeTitle;
