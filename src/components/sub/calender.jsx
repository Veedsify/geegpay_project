import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Import the CSS file for custom styles

export default function MyCalendar() {
    const [value, onChange] = useState(new Date());
    return (
        <Calendar
            className="border-none rounded-md"
            activeStartDate={new Date(2023, 10, 15)}
            defaultActiveStartDate={new Date(2023, 11, 15)}
            onChange={onChange}
            value={value}
        />
    );
}
