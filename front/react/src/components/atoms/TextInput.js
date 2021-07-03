import React from 'react'

const TextInput = (props) => {
  return (
    <div className="input-group">
      {props.label && <label htmlFor={props.label}>{props.label}</label>}
      {!props.multiline ? (
        <input
          value={props.value}
          type={props.type}
          id={props.label}
          placeholder={props.label}
          onChange={props.onChange}
        />
      ) : (
        <textarea
          value={props.value}
          id={props.label}
          placeholder={props.label}
          onChange={props.onChange}
        />
      )}
    </div>
  )
}

export default TextInput
