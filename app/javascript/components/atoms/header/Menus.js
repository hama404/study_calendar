import React from 'react'
import { Link } from 'react-router-dom';
import { BsCalendarFill, BsList, BsPlusSquare, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

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
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/home" style={style}>
              <BsCalendarFill />
            </Link>
          </li>
          <li>
            <Link to="/todo" style={style}>
              <BsReverseLayoutTextSidebarReverse />
            </Link>
          </li>
          <li>
            <a href="#!" onClick={props.toggleDialog(true)} style={style}>
              <BsPlusSquare />
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
