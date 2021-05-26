import React from 'react';
import { Content, Graph } from './modules';

const First = () => {

  const initData = [
    {
      name: 'Red',
      time: 300,
      color: 'rgb(255, 99, 132)'
    },
    {
      name: 'Blue',
      time: 50,
      color: 'rgb(54, 162, 235)'
    },
    {
      name: 'Yellow',
      time: 100,
      color: 'rgb(255, 205, 86)'
    },
  ]

  return (
    <>
      <Content />
      <div className="graph">
        <Graph dateLists={initData} />
      </div>
    </>
  );
}

export default First;