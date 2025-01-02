import * as React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonth(new Date().getMonth());
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  const generateCalendar = () => {
    const date = new Date(currentYear, currentMonth);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = date.getDay();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div className="empty-day" key={`empty-${i}`}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();
      const isSelectedStart =
        selectedStartDate === day &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();
      const isSelectedEnd =
        selectedEndDate === day &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();
      const isInRange =
        selectedStartDate &&
        selectedEndDate &&
        day > selectedStartDate &&
        day < selectedEndDate;

      const dayClass = `
        ${isToday ? "bg-custom-light" : ""}
        ${isSelectedStart || isSelectedEnd ? "bg-custom-purple" : ""}
        ${isInRange ? "bg-custom-light" : ""}
        border border-gray-300 p-2 text-center
      `;

      calendarDays.push(
        <div
          key={day}
          className={dayClass}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const handleDateClick = (day) => {
    if (selectedStartDate === null) {
      setSelectedStartDate(day);
    } else if (selectedEndDate === null) {
      setSelectedEndDate(day);
    } else {
      setSelectedStartDate(day);
      setSelectedEndDate(null);
    }
  };

  return (
    <div className="w-1/4 pr-5 pb-5">
      <div className="bg-white h-[21.5625rem] p-4 rounded-3xl">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex gap-9 items-center">
            <div className="flex items-center relative">
              <select
                onChange={handleMonthChange}
                value={currentMonth}
                className="bg-custom-light appearance-none pl-4 pr-[30px] py-3 font-bold text-sm text-custom-purple text-center tracking-negative-2 rounded-3xl"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="text-custom-purple absolute right-3" />
            </div>
            <div className="flex items-center relative">
              <select
                onChange={handleYearChange}
                value={currentYear}
                className="appearance-none pl-4 pr-[30px] py-3 font-bold text-sm text-black text-center tracking-negative-2 rounded-3xl"
              >
                {Array.from({ length: 4 }, (_, i) => currentYear + i).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
              <IoIosArrowDown className="text-black absolute right-3" />
            </div>

            {/* <div className="bg-custom-gray p-3 flex gap-1 items-center rounded-3xl">
              <span className="font-bold text-sm text-custom-purple tracking-negative-2">
                April
              </span>
              <IoIosArrowDown className="text-custom-purple" />
            </div>
            <div className="bg-custom-gray p-3 flex gap-1 items-center rounded-3xl">
              <span className="font-bold text-sm text-custom-purple tracking-negative-2">
                2024
              </span>
              <IoIosArrowDown className="text-custom-purple" />
            </div> */}
          </div>
          <div className="grid grid-cols-7">{generateCalendar()}</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
