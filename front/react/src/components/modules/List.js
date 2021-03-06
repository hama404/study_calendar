import React, { useState, useEffect } from 'react'
import { TextInput } from '../atoms'

const List = (props) => {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState('')
  const [num, setNum] = useState('')
  const [hex, setHex] = useState('')

  const handleEdit = () => {
    setEditing(true)
  }

  const handleCansel = () => {
    setEditing(false)
  }

  const inputText = (e) => {
    setText(e.target.value)
  }

  const inputNum = (e) => {
    setNum(e.target.value)
  }

  const inputHex = (e) => {
    setHex(e.target.value)
  }

  const changeCompleted = () => {
    const data = {
      ...props.list,
      completed: !props.list.completed,
    }
    props.updateList(props.list.id, data)
  }

  const handleUpdate = () => {
    const min = Number(num)
    const rgb = props.changeColorCode(hex)
    const data = {
      ...props.list,
      name: text,
      time: min,
      color: rgb,
    }
    props.updateList(props.list.id, data)
    setEditing(false)
  }
  const handleDelete = () => {
    props.deleteList(props.list.id)
  }

  const diplayTime = (time) => {
    const hour = Math.floor(time / 60)
    const min = ('0' + (time % 60)).slice(-2)
    return (hour ? hour + 'h' : '') + min + 'm'
  }

  const style = {
    background: props.list.color,
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
  }

  useEffect(() => {
    setEditing(false)
    setText(props.list.name)
    setNum(String(props.list.time))
    setHex(props.changeColorCode(props.list.color))
  }, [props])

  return (
    <React.Fragment>
      {!editing ? (
        <React.Fragment>
          <input
            type="checkbox"
            checked={props.list.completed}
            onChange={changeCompleted}
          />
          <span style={style}></span>
          <span>{props.list.name}</span>
          <span>{diplayTime(props.list.time)}</span>
          <div className="btn-group">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextInput value={hex} type="color" onChange={inputHex} />
          <TextInput value={text} type="text" onChange={inputText} />
          <TextInput value={num} type="number" onChange={inputNum} />
          <button onClick={handleCansel}>Cansel</button>
          <button onClick={handleUpdate}>Update</button>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default List
