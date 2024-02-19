// components/countdownNextEvent.jsx
import React, { useState, useEffect } from 'react';
import schedule24Datas from './datas/schedule24Datas'; // Adjust the path accordingly




const CountdownNextEvent = () => {
  const [events, setEvents] = useState(schedule24Datas);
  const [nextEvent, setNextEvent] = useState(findNextEvent());
  const [countdown, setCountdown] = useState(calculateCountdown(nextEvent.startDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const newNextEvent = events.find(event => new Date(event.startDate) > currentDate);
      setNextEvent(newNextEvent);

      if (newNextEvent) {
        const newCountdown = calculateCountdown(newNextEvent.startDate);
        setCountdown(newCountdown);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [events]);




  function findNextEvent() {
    const currentDate = new Date();
    return events.find(event => new Date(event.startDate) > currentDate);
  }



  if (!nextEvent) {
    return <div>No upcoming events</div>;
  }

  const { name } = nextEvent;
  return (
    <>
    <div class="grandprixgraphic-active">
      <img class="f1graphiccountdown" src="./mediacontent/logos/F1-red.svg" alt="Logo" /> 
      <h2 class="countdown">{nextEvent.name}</h2>
      <h3 class="countdown">
        <p class="countdown">Event starts in: </p>
        {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</h3>
      
      <p class="countdown">{nextEvent.destination}, {nextEvent.country} | 
        <span class="countdown"> {nextEvent.displayDate}</span>
      </p>
    </div>

    </>
  );
  
};





function calculateCountdown(eventDate) {
  const now = new Date().getTime();
  const eventTime = new Date(eventDate).getTime();
  const timeDifference = eventTime - now;

  if (timeDifference <= 0) {
    // Event has passed
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export default CountdownNextEvent;
