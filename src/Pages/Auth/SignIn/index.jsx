import "./style.css";
import { AuthLogin, AuthRegister } from "../Auth_Funcs/Auth_Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn_Frame() {
  const navigate = useNavigate();
  const [type, setType] = useState("Sign In");
  let username;
  let email;
  let password;

  async function handleLogin(e) {
    const errorForm = document.getElementById("Error_FormText");

    e.preventDefault();
    const dados = await AuthLogin(email, password);
    errorForm.innerText = dados.msg;
    console.log(dados.token);

    if (errorForm.innerText === "") {
      localStorage.setItem("LoginToken", dados.token);
      navigate("/home");
    } else {
    }
  }

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

  function resetInput(UNE) {
    username = "";
    email = "";
    password = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    if (UNE) {
      document.getElementById("username").value = "";
    }
    console.log("reset");
  }

  if (type == "Sign In") {
    document.title = "TKS Sign In";
    return (
      <>
        <h1>Sign In</h1>
        <form>
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
            onChange={(e) => {
              password = e.target.value;
            }}
          />
          <button
            className="Login_Button"
            id="Login_Button"
            onClick={handleLogin}
          >
            <p>LOGIN</p>
          </button>
          <p className="Dont_Have">
            Don't have an account?{" "}
            <span
              onClick={(e) => {
                setType("Sign Up");
                resetInput();
              }}
            >
              Register
            </span>
            .
          </p>
          <p id="Error_FormText" style={{ color: "var(--TextError3)" }}></p>
        </form>
      </>
    );
  } else if (type == "Sign Up") {
    document.title = "TKS Sign Up";
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
            Already have an account?{" "}
            <span
              onClick={(e) => {
                setType("Sign In");
                resetInput(true);
              }}
            >
              Sign In
            </span>
            .
          </p>
          <p id="Error_FormText" style={{ color: "var(--TextError3)" }}></p>
        </form>
      </>
    );
  }
}

export default SignIn_Frame;
