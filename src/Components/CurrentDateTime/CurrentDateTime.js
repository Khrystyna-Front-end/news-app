import React from "react";
import "./CurrentDateTime.css";

export default function CurrentDateTime(props) {
  let days = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hours < 10) {
    hours = `0` + hours;
  }
  if (minutes < 10) {
    minutes = `0` + minutes;
  }
  return (
    <div className="currentDate">
      {day} {hours}:{minutes}
    </div>
  );
}
