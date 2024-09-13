import axios from 'axios';
import './style.css'
import { useState, useEffect } from 'react';
import Api from '../../Services/Api';
import { useNavigate } from 'react-router-dom';
import { errorAnim, toggle } from '../../Functions/Auth.jsx'

function SignUp_Frame() {

  const [errorText, setErrorText] = useState(""); const [username, setUsername] = useState(""); const [password, setPassword] = useState(""); const [email, setEmail] = useState("");

  const UserLS = localStorage.getItem("User/Login");
  const navigate = useNavigate();

// -------------- disgraça do back --------------

    async function register(e) {
      e.preventDefault();
      try {
        let requisicao = await Api.post("/Auth/Register", {username, email, password});
        if (requisicao.status == 201) {
          if (UserLS != requisicao.data ) {
            localStorage.setItem("User/Login", requisicao.data);
            console.log(UserLS);
          }
          navigate("/Home");
        }
      } catch (error) {
        if (!error?.response) {
          setErrorText("Erro ao acessar o Servidor.");
          errorAnim(document.getElementById("SignUp_Frame"), "Signup_Frame", "Signup_Frame_Erro", setErrorText);
        } else if (error.response.status == 401){
          setErrorText("Email ja cadastrado.");
          errorAnim(document.getElementById("SignUp_Frame"), "Signup_Frame", "Signup_Frame_Erro", setErrorText);
        };
      }

    }

// -------------- parte da UI --------------

  function userChange(e) {
    setUsername(e.target.value);
    disabledButton()
  }function pswChange(e) {
    setPassword(e.target.value);
    disabledButton()
  }function emailChange(e) {
    setEmail(e.target.value);
    disabledButton()
  }

  function disabledButton() {
    if (password != "" && username != "" && email !== "" && email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null && errorText == "") {
      document.getElementById("SignUp_Button").disabled = false;
    } else{
    document.getElementById("SignUp_Button").disabled = true;
    }
  }

  useEffect(() => {
    disabledButton();
  })

  return (
    <>
      <div className='Signup_Frame SUOff' id='SignUp_Frame'>
        <div className="signup_div">
          <div className='Signup_Logo' id='SignUp_Logo_Frame'><img src="src/assets/Logo/Troick_Logo45px.png" draggable="false"/></div>
          <h1>Sign Up</h1>
          <div className="Signup_Separation"></div>
          <form>
            <input type="text" name="username" id="signup_username" placeholder='Username' className='Signup_Input' onChange={(e) => {userChange(e)}} />
            <input type="email" name="email" id="signup_email" placeholder='Email' className='Signup_Input' onChange={(e) => {emailChange(e)}} />
            <input type="password" name="password" id="signup_password" placeholder='Password' className='Signup_Input' onChange={(e) => {pswChange(e)}} />
            <button className='Signup_Button' id='SignUp_Button' onClick={register}>REGISTER</button>
          </form>
          <p id='SignUp_Error_Text' className='SignUp_Error_Text'>{errorText}</p>
          <p>Already have an account? <span  onClick={()=> {toggle("Delta Sign In",document.getElementById("SignUp_Frame").classList.toggle("SUOff"),document.getElementById("SignIn_Frame").classList.toggle("SIOff"))}}>Sign In</span>.</p>
        </div>
      </div>
    </>
  )

}

export default SignUp_Frame;