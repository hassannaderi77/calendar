import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import { Container, Card } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import "./calendar.css";

export default function Calendar() {
  return (
    <Container className="mt-5">
      <Card className="shadow p-4 calendar-container">
        <h2 className="text-center text-white mb-4">Calendar <IoCalendarOutline /></h2>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="en"
          events={[
            { title: "Event 1", date: moment().format("YYYY-MM-DD") },
            { title: "Event 2", date: moment().add(3, "days").format("YYYY-MM-DD") },
          ]}
          height="auto"
        />
      </Card>
    </Container>
  );
}