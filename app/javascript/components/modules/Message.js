import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IconButton } from '../atoms'

const Message = (props) => {

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
