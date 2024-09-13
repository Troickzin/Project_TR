import { useEffect, useState } from "react";
import Api from "../../Services/Api";
import "./style.css";
import Float_Bar from "../../Containers/Float_Bar";

function Login() {
  document.title = "Delta Login";

  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  function Clock() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    return padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <Float_Bar elements={["Home", "Shop"]} />
      <h1 className="Login_Page_h1">Login Page</h1>
      <h2>{Clock()}</h2>
    </>
  );
}

export default Login;
