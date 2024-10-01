import { AuthenticatorTitleStyled } from "./Authenticator.Style";

export function AuthenticatorTitle(props) {
  return (
    <AuthenticatorTitleStyled>
      <h1>{props.Title}</h1>
      <p>{props.Subtitle}</p>
    </AuthenticatorTitleStyled>
  );
}
