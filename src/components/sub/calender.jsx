import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Import the CSS file for custom styles
import { useCalendarContext } from "../../libs/calendarcontext";
import { useEffect, useState } from "react";

export default function MyCalendar() {
  const { selectedDate, setSelectedDate } = useCalendarContext();
  const [value, onChange] = useState([selectedDate]); // Wrap selectedDate in an array

  useEffect(() => {
    setSelectedDate(value); // Access the first element of the array
    return () => {};
  }, [value, setSelectedDate]);
  return (
    <Calendar
      className="border-none rounded-md"
      defaultActiveStartDate={new Date('2023-11-15')}
      onChange={onChange}
      value={value}
    />
  );
}
