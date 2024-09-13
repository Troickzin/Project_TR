import { useState } from 'react'
import Api from '../../Services/Api'
import SignUp_Frame from '../../Containers/SignUp_Frame'
import SignIn_Frame from '../../Containers/SignIn_Frame'
import './style.css'

function Auth() {

  document.title = "Delta Sign In";

  return (
    <>
      <img className='sbe' src="src/assets/signin_background_effect.png" draggable="false"/>
      <div className='Effect'></div>
      <SignIn_Frame />
      <SignUp_Frame />
    </>
  )
}

export default Auth