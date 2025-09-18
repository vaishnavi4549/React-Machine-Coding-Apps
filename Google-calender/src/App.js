import "./styles.css";
import React, { useState } from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  //0 as it will give the count of prev month days
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDay = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysinmonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const monthdays = [];

  for (let i = 0; i < firstDay; i++) {
    monthdays.push(null);
  }

  for (let i = 1; i <= daysinmonth; i++) {
    monthdays.push(i);
  }

  const onClickNext = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  const onClickPrev = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const todayDate = new Date();
  const today =
    todayDate &&
    todayDate.getFullYear() === currentDate.getFullYear() &&
    todayDate.getMonth() === currentDate.getMonth()
      ? todayDate.getDate()
      : null;

  console.log("heyyy", today);
  return (
    <div>
      <div className="App">
        <div style={{ marginBottom: "20px" }}>Google Calender</div>
        <span>
          {months[month]} &nbsp;&nbsp;
          {year}
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(7, 1fr)`,
            textAlign: "center",
            marginTop: "4%",
          }}
        >
          {weekdays.map((days) => (
            <div style={{ fontWeight: "bold" }}>{days}</div>
          ))}
          {monthdays.map((day) => (
            <div
              style={{
                background: day === today && day !== null ? "lightblue" : "",
                borderRadius: "50px",
              }}
            >
              {day}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <button onClick={onClickPrev}>Prev</button>
          &nbsp;&nbsp;
          <button onClick={onClickNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
