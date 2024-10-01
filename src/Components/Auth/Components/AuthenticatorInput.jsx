import { Authenticator_Inputs_Changes } from "../../../Services/Authenticator";
import { AuthenticatorInputStyled } from "./Authenticator.Style";

export function AuthenticatorInput(props) {
  const Info = { Action: Authenticator_Inputs_Changes };

  return (
    <AuthenticatorInputStyled>
      {props.Icon}
      <input
        type={props.Type}
        name={props.Type}
        autoComplete="false"
        maxLength={props.maxLength}
        id={"Input_" + props.Type}
        placeholder={props.placeholder}
        onChange={(e) => {
          Authenticator_Inputs_Changes(e, props.Type);
        }}
      />
    </AuthenticatorInputStyled>
  );
}
