import React from 'react'
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Message = (props) => {

  const IconButton = styled.div`
    display: inline-flex;
    padding: 0.5rem;
    font-size: 1.25rem;
    &:hover {
      cursor: pointer;
      color: #999;
    }
  `

  const handleClick = () => {
    props.setMessage(null)
  }

  return (
    <div className="message">
      {props.message.text}
      <IconButton onClick={handleClick}>
        <AiOutlineCloseCircle />
      </IconButton>
    </div>
  )
}

export default Message
