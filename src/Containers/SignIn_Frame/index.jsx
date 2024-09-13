import { useState, useEffect } from 'react'
import './style.css'
import { useNavigate, useNavigation } from 'react-router-dom';
import Api from '../../Services/Api';
import { errorAnim, toggle } from '../../Functions/Auth.jsx'

function SignIn_Frame() {

  const [errorText, setErrorText] = useState(""); const [username, setUsername] = useState(""); const [password, setPassword] = useState("");

    // -------------- disgraça do back --------------

  async function signin(e) {
    e.preventDefault();
    try {
      let info = await Api.post("/Auth/Login", {username, password});
      if (info.status == 201) {
        console.log("Logado");
      }
    } catch (error) {
      if (!error?.response) {
        setErrorText("Erro ao acessar o Servidor.");
        errorAnim(document.getElementById("SignIn_Frame"), "Signin_Frame", "Signin_Frame_Erro", setErrorText);
      } else if (error.response.status == 401){
        setErrorText("Usuario ou Senha Invalido.");
        errorAnim(document.getElementById("SignIn_Frame"), "Signin_Frame", "Signin_Frame_Erro", setErrorText);
      };
    }

  }

  // -------------- parte da UI --------------

  useEffect(() => {
    disabledButton();
  })

  function userChange(e) {
    setUsername(e.target.value);
    disabledButton()
  }function pswChange(e) {
    setPassword(e.target.value);
    disabledButton()
  }

  function disabledButton() {
    if (password != "" && username != "") {
      document.getElementById("SignIn_Button").disabled = false;
    } else{
      document.getElementById("SignIn_Button").disabled = true;
    }
  }

  return (
    <>
      <div className='Signin_Frame ' id='SignIn_Frame'>
        <div className='Signin_Logo'><img src="src/assets/Logo/Troick_Logo45px.png" draggable="false"/></div>
        <h1>Sign In</h1>
        <div className="Signin_Separation"></div>
        <form>
          <input type="text" name="username" id="signin_username" placeholder='Username' className='Signin_Input' onChange={(e) => userChange(e)}/>
          <input type="password" name="password" id="signin_password" placeholder='Password' className='Signin_Input' onChange={(e) => pswChange(e)}/>
          <button className='Signin_Button' id='SignIn_Button' onClick={signin}>LOGIN</button>
        </form>
        <p id='SignIn_Error_Text' className='SignIn_Error_Text'>{errorText}</p>
        <p>Don't have an account? <span onClick={()=> {toggle("Delta Sign Up",document.getElementById("SignIn_Frame").classList.toggle("SIOff"),document.getElementById("SignUp_Frame").classList.toggle("SUOff"))}} disabled>Sign Up</span>.</p>
      </div>
    </>
  )

}

export default SignIn_Frame