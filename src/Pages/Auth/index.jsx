import "./style.css";
import SignIn_Frame from "./SignIn";
import SignUp_Frame from "./SignUp";
function Auth() {
  document.title = "TKS Auth";

  return (
    <>
      <nav className="Auth_Navbar">
        <img src="src/assets/Logo/Logo40px.png" className="Auth_Icon" />
        <SignIn_Frame />
      </nav>
    </>
  );
}

export default Auth;
