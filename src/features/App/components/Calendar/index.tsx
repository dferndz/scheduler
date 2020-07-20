import React, { useCallback, useState, useEffect } from "react";
import { useAuthContext } from "../../../../auth/context";
import moment from "moment";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const { db } = useAuthContext();
  const { data, update } = db;

  useEffect(() => {
    if (data && data.calendar) {
      const cleaned_events: Event[] = [];
      data.calendar.map((element: Event) => {
        const new_event = { ...element };
        new_event.start = new Date(new_event.start!);
        new_event.end = new Date(new_event.end!);
        cleaned_events.push(new_event);
      });
      setEvents(cleaned_events);
    }
  }, [data]);

  const handleSlotSelect = (slot: any) => {
    const current_events = [...events];

    const new_event: Event = {
      title: "Event",
      start: slot.start.toString(),
      end: slot.end.toString(),
    };
    current_events.push(new_event);

    const new_data = { ...data };
    new_data.calendar = current_events;
    console.log(current_events);
    update(new_data);
  };

  return (
    <div>
      <p>Schedule</p>
      <hr />
      <Calendar
        localizer={localizer}
        events={events}
        step={60}
        selectable={true}
        onSelectSlot={handleSlotSelect}
      />
    </div>
  );
};

export default Schedule;
