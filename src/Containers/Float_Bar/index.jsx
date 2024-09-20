import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function Float_Bar({ Type }) {
  const navigate = useNavigate();

  /* ------ Funções de navegação ------ */

  const ShopEv = () => {
    return navigate("/shop");
  };
  const HomeEv = () => {
    return navigate("/home");
  };
  const AboutEv = () => {
    return navigate("/about");
  };
  const SupportEv = () => {
    return navigate("/support");
  };

  /* ------ Tipos de Navbar ------ */

  if (Type === "Home") {
    return (
      <>
        <nav className="Float_Navbar">
          <button onClick={ShopEv}>Shop</button>
          <button onClick={AboutEv}>About</button>
          <button onClick={SupportEv}>Support</button>
        </nav>
      </>
    );
  } else if (Type === "Shop") {
    return (
      <>
        <nav className="Float_Navbar">
          <button onClick={HomeEv}>Home</button>
          <img src="src/assets/Logo/Logo40px.png" />
          <input type="text" placeholder="Search" />
        </nav>
      </>
    );
  }

  return <></>;
}

export default Float_Bar;
