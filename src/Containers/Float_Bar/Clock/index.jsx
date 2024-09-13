import { useState, useEffect } from "react";
import "./style.css";
function Float_Clockbar() {
  useEffect(() => {
    // window.addEventListener("scroll", (e) => {
    //   scroll(window.scrollY);
    // });
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  function scroll(scroll) {
    const fcb = document.getElementById("Float_ClockBar");

    if (scroll > 0 && fcb.className == "Float_ClockBar_Frame") {
      fcb.classList.add("Float_ClockBar_Frame_Min");
      fcb.classList.remove("Float_ClockBar_Frame");
    } else if (scroll == 0 && fcb.className == "Float_ClockBar_Frame_Min") {
      fcb.classList.add("Float_ClockBar_Frame");
      fcb.classList.remove("Float_ClockBar_Frame_Min");
    }
  }

  const [date, setDate] = useState("");

  function ClockTime() {
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
      <div className="Float_ClockBar_Frame" id="Float_ClockBar">
        <p>{ClockTime()}</p>
      </div>
    </>
  );
}

export default Float_Clockbar;
