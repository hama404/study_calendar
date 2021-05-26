import React from 'react';
import List from './modules/List';

const Todo = (props) => {

  const prevDate = () => {
    props.changeDate(-1);
  }

  const nextDate = () => {
    props.changeDate(1)
  }

  return (
    <React.Fragment>
      <div className="todolists">
        <div className="title">
          <button onClick={prevDate}>&lt;</button>
          <h2>Todo List ({props.date.toLocaleDateString()})</h2>
          <button onClick={nextDate}>&gt;</button>
        </div>
        <ul>
          {props.dateLists.length ? (props.dateLists.map((list, index) =>
            <li key={index}>
              <List
                list={list}
                changeColorCode={props.changeColorCode}
                updateList={props.updateList}
                deleteList={props.deleteList} />
              </li>
          )):(
            <li>nocontent</li>
          )}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Todo;