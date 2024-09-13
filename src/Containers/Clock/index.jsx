import { useEffect, useState } from "react";
import "./style.css";

function Clock() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

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
      <h2 className="Clock_Time_Frame">{ClockTime()}</h2>
    </>
  );
}

export default Clock;
