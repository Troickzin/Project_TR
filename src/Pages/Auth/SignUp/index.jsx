import "./style.css";
import { AuthRegister } from "../Auth_Funcs/Auth_Login";
import { useNavigate } from "react-router-dom";

function SignUp_Frame() {
  const navigate = useNavigate();
  document.title = "TKS Sign Up";
  let username;
  let email;
  let password;

  async function handleRegister(e) {
    const errorForm = document.getElementById("Error_FormText");
    e.preventDefault();

    const dados = await AuthRegister(username, email, password);
    errorForm.innerText = dados.msg;

    if (errorForm.innerText === "") {
      localStorage.setItem("LoginToken", dados.token);
      navigate("/home");
    } else {
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          id="username"
          placeholder="Username"
          required
          onChange={(e) => {
            username = e.target.value;
          }}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          onChange={(e) => {
            email = e.target.value;
          }}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => {
            password = e.target.value;
          }}
        />
        <button
          className="Register_Button"
          id="Register_Button"
          onClick={handleRegister}
        >
          <p>REGISTER</p>
        </button>
        <p className="Dont_Have">
          Already have an account? <span>Sign In</span>.
        </p>
        <p id="Error_FormText" style={{ color: "var(--TextError3)" }}></p>
      </form>
    </>
  );
}

export default SignUp_Frame;
