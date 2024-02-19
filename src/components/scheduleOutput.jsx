import React from 'react';
import schedule24Data from './datas/schedule24Datas';

import '../css/design/schedule.css';






const ScheduleOutput = () => {
  const currentDate = new Date();
  const events = schedule24Data;

  return (
    <div>
      <h1>2024 FIA Formula 1 World Championship Race Calendar</h1>
      {events.map((event, index) => {
        const eventStartDate = new Date(event.startDate);
        const eventEndDate = new Date(event.endDate);

        let eventClass = 'schedule-upcoming';

        if (index > 0) {
          const previousEndDate = new Date(events[index - 1].endDate);

          if (currentDate >= previousEndDate && currentDate <= eventEndDate) {
            eventClass = 'schedule-active';
          } else if (currentDate > eventEndDate) {
            eventClass = 'schedule-past';
          }
        } else {
          eventClass = 'schedule-active';
        }


        if(event.trackmap == 'TCB') {
          return (
          <>
            <div className={'schedule-space'} key={index}>
              <table className={eventClass}>
                <tr>
                  <td>
                    <img className="flag" src={event.flag} alt="flag" />
                  </td>
                </tr>
                <h2 className="schedule">{event.name}</h2>
                <span className="schedule">{event.destination}, {event.country} </span>

                <p className="schedule">{event.displayDate}</p>
              </table>
            </div>
          </>
          );

            
        }else {
          return (
            <div className={'schedule-space'} key={index}>
              <table className={eventClass}>
                <tr>
                  <td>
                    <img className="flag" src={event.flag} alt="flag" />
                  </td>
                </tr>
                <p class="schedule color-f1red">Round {event.round}</p>
                <h2 className="schedule">{event.name}</h2>
                <span className="schedule">{event.destination}, {event.country} </span>
                
                <tr>
                  <td>
                    <img className="trackmap" src={event.trackmap} alt="track" />
                  </td>
                </tr>
                
                
                <p className="schedule">{event.displayDate}</p>
              </table>
            </div>
          );
          
        }//END ELSE


      })}
    </div>
  );
};

export default ScheduleOutput;
