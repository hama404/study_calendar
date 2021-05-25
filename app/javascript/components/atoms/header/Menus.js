import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { BsCalendar, BsList, BsPlusCircle, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: rgba(103, 58, 183, 0.5);
  background: inherit;
  border: 2px solid rgba(103, 58, 183, 0.5);
`

const Menus = (props) => {

  const style = {
    display: "inline-flex",
    padding: "0.5rem",
    fontSize: "1.25rem"
  }

  return (
    <nav>
    <ul>
      {!props.user ? (
        <>
          <li>
            <Button>
              <Link to="/login">Log in</Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to="/signup">Sign up</Link>
            </Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/calendar" style={style}>
              <BsCalendar />
            </Link>
          </li>
          <li>
            <Link to="/lists" style={style}>
              <BsReverseLayoutTextSidebarReverse />
            </Link>
          </li>
          <li>
            <a href="#!" onClick={props.toggleDialog(true)} style={style}>
              <BsPlusCircle />
            </a>
          </li>
          <li>
            <a href="#!" onClick={props.toggleDrower(true)} style={style}>
              <BsList />
            </a>
          </li>
        </>
      )}
    </ul>
  </nav>  )
}

export default Menus
