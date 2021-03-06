import React, { useState } from 'react'
import { GreyButton, PrimaryButton, TextInput } from '../atoms'

const FormDialog = (props) => {
  const [key, setKey] = useState(props.makeKey(props.date))
  const [text, setText] = useState('')
  const [num, setNum] = useState('')
  const [hex, setHex] = useState('')

  const inputKey = (e) => {
    setKey(e.target.value)
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

  const submitForm = () => {
    const min = Number(num)
    const rgb = props.changeColorCode(hex)
    const data = {
      name: text,
      date: key,
      time: min,
      color: rgb,
      completed: false,
    }

    props.addList(data)
    props.onClose()
  }

  const handleClose = (event) => {
    if (!event.target.closest('.forms')) props.onClose()
  }

  return (
    <div className="overlay-wrapper" onClick={handleClose}>
      <div className="forms">
        <div className="forms_inner">
          <h2>Add study record</h2>
          <div className="body">
            <TextInput
              label="date"
              value={key}
              type="date"
              onChange={inputKey}
            />
            <TextInput
              label="name"
              value={text}
              type="text"
              onChange={inputText}
            />
            <TextInput
              label="time"
              value={num}
              type="number"
              onChange={inputNum}
            />
            <TextInput
              label="color"
              value={hex}
              type="color"
              onChange={inputHex}
            />
          </div>
          <div className="btn-group">
            <GreyButton onClick={props.onClose}>Close</GreyButton>
            <PrimaryButton onClick={submitForm}>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormDialog
