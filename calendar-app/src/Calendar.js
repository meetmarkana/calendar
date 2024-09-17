import React, { useState, useEffect } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const generateCalendar = (year, month) => {
    const date = new Date(year, month, 1);
    const firstDay = date.getDay(); 
    const lastDay = new Date(year, month + 1, 0).getDate(); 

    const daysArray = [];

    
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null); 
    }
    for (let day = 1; day <= lastDay; day++) {
      daysArray.push(day); 
    }

    setDaysInMonth(daysArray);
  };

  useEffect(() => {
    generateCalendar(year, month);
  }, [month, year]);

  const previousMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) {
      setYear((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) {
      setYear((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h2>
        {currentDate.toLocaleString('default', { month: 'short' })} {year}
      </h2>
      <button onClick={previousMonth}>Previous</button>
      <button onClick={nextMonth}>Next</button>

      <div className="calendar-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>

        {daysInMonth.map((day, index) => (
          <div key={index} className="calendar-day">
            {day ? day : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
