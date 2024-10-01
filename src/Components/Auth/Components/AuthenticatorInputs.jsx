import React from "react";
import { AuthenticatorInputsStyled } from "./Authenticator.Style";

export function AuthenticatorInputs(props) {
  return (
    <AuthenticatorInputsStyled>{props.children}</AuthenticatorInputsStyled>
  );
}
