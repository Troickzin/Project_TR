import { useState, useEffect } from "react";
import "./style.css";
function Float_Clockbar() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

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
