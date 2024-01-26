import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Import the CSS file for custom styles
import { useCalendarContext } from "../../libs/calendarcontext";
import { useEffect, useState } from "react";
import { useModeContext } from "../../libs/context";

export default function MyCalendar() {
  const { selectedDate, setSelectedDate } = useCalendarContext();
  const [value, onChange] = useState([selectedDate]); // Wrap selectedDate in an array
  const { mode } = useModeContext();

  useEffect(() => {
    setSelectedDate(value); // Access the first element of the array
    return () => {};
  }, [value, setSelectedDate]);
  return (
    <Calendar
      className={`border rounded-md ${mode === "light" ? "bg-white text-black" : "dark-mode text-white"}`}
      defaultActiveStartDate={new Date('2023-11-15')}
      onChange={onChange}
      value={value}
    />
  );
}
