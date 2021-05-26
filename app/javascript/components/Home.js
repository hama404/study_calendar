import React from 'react'
import Calendar from 'react-calendar'
import { Graph } from './modules'
import 'react-calendar/dist/Calendar.css'

const Home = (props) => {
  return (
    <>
      <div className="calendar">
        <Calendar
          locale="en-US"
          value={props.date}
          onChange={props.setDate}
        />
      </div>
      <div className="graph">
        <Graph
          date={props.date}
          dateLists={props.dateLists}
        />
      </div>
    </>
  );
}

export default Home;
