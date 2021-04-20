import React, { useState, useEffect } from 'react'
import TextInput from './TextInput';

const List = (props) => {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const [hex, setHex] = useState("");

  const handleEdit = () => {
    setEditing(true);
  }

  const handleCansel = () => {
    setEditing(false);
  }

  const inputText = (e) => {
    setText(e.target.value);
  }

  const inputNum = (e) => {
    setNum(e.target.value);
  }

  const inputHex = (e) => {
    setHex(e.target.value);
  }

  const changeCompleted = () => {
    props.toggleCompleted(props.list);
  }

  const handleUpdate = () => {
    props.updateList();
  }
  const handleDelete = () => {
    props.deleteList(props.list);
  }

  const diplayTime = (time) => {
    const hour = Math.floor(time / 60);
    const min = time % 60;
    return (hour ? hour + 'h' : '') + min + 'm';
  }

  const style = {
    background: props.list.color,
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
  };

  useEffect(() => {
    setText(props.list.name);
    setNum(String(props.list.time));
    setHex(props.changeColorCode(props.list.color));
  }, [props.list])

  return (
    <React.Fragment>
      {!editing ? (
        <React.Fragment>
          <input type="checkbox"
            checked={props.list.completed}
            onChange={changeCompleted} />
          <span style={style}></span>
          <span>{props.list.name}</span>
          <span>{diplayTime(props.list.time)}</span>
          <div className="btn-group">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </React.Fragment>
      ):(
        <React.Fragment>
          <TextInput
            value={hex}
            type="color"
            onChange={inputHex} />
          <TextInput
            value={text}
            type="text"
            onChange={inputText} />
          <TextInput
            value={num}
            type="number"
            onChange={inputNum} />
          <button onClick={handleCansel}>Cansel</button>
          <button onClick={handleUpdate}>Update</button>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default List
