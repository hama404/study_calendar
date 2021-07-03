import React from 'react'
import { BsBoxArrowInRight, BsPersonSquare, BsX } from 'react-icons/bs'
import { CloseIcon, ListClose, ListIcon, ListItem, ListText } from '../ListKit'

const Drower = (props) => {
  const handleClose = (event) => {
    if (!event.target.closest('.drower')) props.onClose()
  }
  return (
    <div className="overlay-wrapper" onClick={handleClose}>
      <div className="drower">
        <ul>
          <ListClose onClick={props.onClose}>
            <CloseIcon>
              <BsX />
            </CloseIcon>
          </ListClose>
          <ListItem>
            <ListIcon>
              <BsPersonSquare />
            </ListIcon>
            <ListText>{props.user.uid}</ListText>
          </ListItem>
          <ListItem onClick={props.signout}>
            <ListIcon>
              <BsBoxArrowInRight />
            </ListIcon>
            <ListText>Sign out</ListText>
          </ListItem>
        </ul>
      </div>
    </div>
  )
}

export default Drower
