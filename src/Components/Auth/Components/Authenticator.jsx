import { AuthenticatorRoot } from "./AuthenticatorRoot.jsx";
import { AuthenticatorTitle } from "./AuthenticatorTitle.jsx";
import { AuthenticatorVerify } from "./AuthenticatorVerify.jsx";
import { AuthenticatorInputs } from "./AuthenticatorInputs.jsx";
import { AuthenticatorInput } from "./AuthenticatorInput.jsx";

export const InputsInfos = { email: "", password: "", username: "" };

export const Authenticator = {
  Root: AuthenticatorRoot,
  Title: AuthenticatorTitle,
  Inputs: AuthenticatorInputs,
  Input: AuthenticatorInput,
  Verify: AuthenticatorVerify,
};
