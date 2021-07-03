import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.piecelabel.js'

const Graph = (props) => {
  const graphData = {
    labels: [],
    datasets: [
      {
        label: 'My First Dataset',
        data: [],
        backgroundColor: [],
        hoverOffset: 4,
      },
    ],
  }

  const graphOption = {
    title: {
      display: true,
      text: props.date ? props.date.toLocaleDateString() : 'notitle',
    },
    pieceLabel: {
      render: 'percentage',
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          return (
            data.labels[tooltipItem.index] +
            ': ' +
            data.datasets[0].data[tooltipItem.index] +
            'm'
          )
        },
      },
    },
  }

  const setDataset = (lists) => {
    if (lists.length) {
      lists.map((list) => {
        graphData.labels.push(list.name)
        graphData.datasets[0].data.push(list.time)
        graphData.datasets[0].backgroundColor.push(list.color)
        return false
      })
    } else {
      graphData.labels.push('nocontent')
      graphData.datasets[0].data.push(100)
      graphData.datasets[0].backgroundColor.push('rgb(158, 158, 158)')
    }
  }
  setDataset(props.dateLists)

  return (
    <>
      <Pie data={graphData} options={graphOption} />
    </>
  )
}

export default Graph
