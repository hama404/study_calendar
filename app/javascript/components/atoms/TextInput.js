import React from 'react';

const TextInput = (props) => {
  return (
    <React.Fragment>
      {props.label && (
        <label htmlFor={props.label}>{props.label} :</label>
      )}
      {!props.multiline ? (
        <input
          value={props.value}
          type={props.type}
          id={props.label}
          onChange={props.onChange} />
      ) : (
        <textarea
          value={props.value}
          id={props.label}
          onChange={props.onChange} />
      )}
    </React.Fragment>
  )
}

export default TextInput;
