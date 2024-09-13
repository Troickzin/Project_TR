import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Float_Bar from "../../Containers/Float_Bar";

function Home() {
  const UserLS = localStorage.getItem("User/Login");
  const navigate = useNavigate();

  useEffect(() => {
    // if (UserLS == null) {
    //   navigate("/Auth");
    // }
  });

  return (
    <>
      <Float_Bar
        elements={[
          ["Home", "Button"],
          ["Shop", "Button"],
          ["Search", "Input"],
          ["Account", "Button"],
        ]}
      />
      <h1 className="Home_Page_h1">HOME PAGE</h1>
      <div className="background_image">
        <img src="src/assets/background.jpg" draggable="false" />
        <div className="page_detail"></div>
        <div className="page_more_detail"></div>
      </div>
    </>
  );
}

export default Home;
