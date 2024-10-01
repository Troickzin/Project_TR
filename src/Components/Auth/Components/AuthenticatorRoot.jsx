import React from "react";
import { AuthenticatorRootStyled } from "./Authenticator.Style.jsx";

export function AuthenticatorRoot(props) {
  return (
    <form>
      <AuthenticatorRootStyled>{props.children}</AuthenticatorRootStyled>
    </form>
  );
}
