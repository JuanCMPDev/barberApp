import React, { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import { format } from "date-fns";
import { useRouter } from 'next/navigation';
import { getTimes } from '../utils/getTimes';

const Calendar = ({ initialDate }) => {
  const [date, setDate] = useState(initialDate || {
    justDate: null,
    dateTime: null,
  });

  const router = useRouter();

  useEffect(() => {
    if (initialDate) {
      setDate(initialDate);
    }
  }, [initialDate]);

  const handleDayClick = (selectedDate) => {
    setDate((prev) => ({ ...prev, justDate: selectedDate }));
    const formattedDate = selectedDate.toISOString(); // Formato completo de ISO
    router.push(`/citas?date=${encodeURIComponent(formattedDate)}`);
  };

  const times = getTimes(date);

  return (
    <div className="flex h-screen flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex gap-4 flex-wrap justify-center">
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, "kk:mm")}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          locale="es-ES"
          className="REACT-CALENDAR p-2"
          view="month"
          onClickDay={handleDayClick}
          minDate={new Date()}
        />
      )}
    </div>
  );
};

export default Calendar;
