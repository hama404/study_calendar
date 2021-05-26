import React from 'react'
import styled from 'styled-components'
import HTMLReactParser from 'html-react-parser'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Message = (props) => {

  const IconButton = styled.div`
    display: inline-flex;
    padding: 0.5rem;
    font-size: 1.25em;
    min-width: 3rem;
    justify-content: flex-end;
    &:hover {
      cursor: pointer;
      color: #999;
    }
  `
  const returnCodeToBr = (text) => {
    if (text === "") {
      return text
    } else {
      return HTMLReactParser(text.replace(/\r?\n/g, '<br />'))
    }
  }
  
  const handleClick = () => {
    props.setMessage(null)
  }

  return (
    <div className="message">
      {returnCodeToBr(props.message.text)}
      <IconButton onClick={handleClick}>
        <AiOutlineCloseCircle />
      </IconButton>
    </div>
  )
}

export default Message
