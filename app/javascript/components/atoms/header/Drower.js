import React from 'react'
import styled from 'styled-components'
import { BsBoxArrowInRight, BsPersonSquare, BsX } from 'react-icons/bs'

const Drower = (props) => {

  const ListItem = styled.li`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1)
    }
  `

  const ListIcon = styled.div`
    display: inline-flex;
    font-size: 1.5rem;
    min-width: 3rem;
    flex-shurink: 0;
  `

  const ListText = styled.div`
    width: 100%;
    line-height: 1.5;
    padding: 0.25rem 0;
  `

  const ListClose = styled.div`
    text-align: right;
  `

  const IconButton = styled.div`
    display: inline-flex;
    padding: 0.5rem;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
      color: #999;
    }
  `

  const handleClose = (event) => {
    if (!event.target.closest('.drower')) props.onClose()
  }
  return (
    <div className="overlay-wrapper" onClick={handleClose}>
      <div className="drower">
        <ul>
          <ListClose onClick={props.onClose}>
            <IconButton>
              <BsX />
            </IconButton>
          </ListClose>
          <ListItem>
            <ListIcon>
              <BsPersonSquare />
            </ListIcon>
            <ListText>
              {props.user.uid}
            </ListText>
          </ListItem>
          <ListItem  onClick={props.signout}>
            <ListIcon>
              <BsBoxArrowInRight />
            </ListIcon>
            <ListText>
              Sign out
            </ListText>
          </ListItem>
        </ul>
      </div>
    </div>
  )
}

export default Drower
