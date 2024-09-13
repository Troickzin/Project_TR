import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Float_Clockbar from "./Clock";
// import { Home, Shop, Search, Account } from "./Functions";

function float_bar(el) {
  useEffect(() => {
    AddElements(el.elements);

    window.addEventListener("scroll", (e) => {
      scroll(window.scrollY);
    });
  });
  function AddElements(elements) {
    const fb = document.getElementById("Float_Bar");
    const cb = document.getElementById("Float_ClockBar");

    if (fb.children.length == 0) {
      for (var i = 0; i < elements.length; i++) {
        const but = document.createElement("button");
        const inp = document.createElement("input");
        const lab = document.createElement("label");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const p = document.createElement("p");

        div.className = elements[i][0];
        img.className = elements[i][0];
        p.className = elements[i][0];
        img.src = "src/assets/" + elements[i][0] + "_Icon.png";
        p.innerText = elements[i][0];

        if (elements[i][1] == "Button") {
          but.appendChild(div);
          div.appendChild(img);
          but.className = elements[i][0];
          fb.appendChild(but);
          div.appendChild(p);

          but.addEventListener("click", (e) => {
            // if (e.target.className == "Home") {
            //   Home();
            // } else if (e.target.className == "Shop") {
            //   Shop();
            // } else if (e.target.className == "Account") {
            //   Account();
            // }
          });
        } else if (elements[i][1] == "Input") {
          lab.appendChild(img);
          lab.appendChild(inp);
          inp.className = elements[i][0];
          inp.id = elements[i][0];
          inp.name = elements[i][0];
          fb.appendChild(lab);
          inp.placeholder = "Search";
        }

        console.log(elements[i]);

        if (i + 1 == elements.length / 2) {
          const img = document.createElement("img");
          fb.appendChild(img);
          img.src = "src/assets/Logo/FloatBar_Logo.png";
          img.className = "Float_bar_Logo";
        }
      }
    }
  }

  function scroll(scroll) {
    const fb = document.getElementById("Float_Bar");
    const fcb = document.getElementById("Float_ClockBar");

    if (scroll > 0 && fb.className == "Float_Bar_Frame") {
      fb.classList.add("Float_Bar_Frame_Min");
      fb.classList.remove("Float_Bar_Frame");
    } else if (scroll == 0 && fb.className == "Float_Bar_Frame_Min") {
      fb.classList.add("Float_Bar_Frame");
      fb.classList.remove("Float_Bar_Frame_Min");
    }
  }

  return (
    <>
      <div className="Float_Bar_Frame" id="Float_Bar"></div>
      {/* <Float_Clockbar /> */}
    </>
  );
}

export default float_bar;
