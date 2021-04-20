import React from 'react';
import { Pie } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import 'chart.piecelabel.js';
import 'react-calendar/dist/Calendar.css';

const Home = (props) => {

  const graphData = {
    labels: [],
    datasets: [
      {
        label: 'My First Dataset',
        data: [],
        backgroundColor: [],
        hoverOffset: 4,
      },
    ]
  };

  const graphOption = {
    title: {
      display: true,
      text: props.date.toLocaleDateString()
    },
    pieceLabel: {
      render: 'percentage'
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          return data.labels[tooltipItem.index]
            + ": "
            + data.datasets[0].data[tooltipItem.index]
            + "m";
        }
      }
    }
  };

  const setGraphData = (lists) => {
    if (lists.length) {
      lists.map((list)=>{
        graphData.labels.push(list.name)
        graphData.datasets[0].data.push(list.time)
        graphData.datasets[0].backgroundColor.push(list.color)
      })
    } else {
      graphData.labels.push("nocontent")
      graphData.datasets[0].data.push(100)
      graphData.datasets[0].backgroundColor.push("rgb(158, 158, 158)")
    }
  };
  setGraphData(props.dateLists);

  return (
    <React.Fragment>
      <div className="calendar">
        <Calendar
          locale="en-US"
          onChange={props.setDate}
          value={props.date}
        />
      </div>
      <div className="graph">
        <Pie
          data={graphData}
          options={graphOption} />
      </div>
    </React.Fragment>
  );
}

export default Home;
