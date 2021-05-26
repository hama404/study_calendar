import React from 'react'
import { Link } from 'react-router-dom';
import { BsCalendar, BsList, BsPlusCircle, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { HeaderButton } from '../';

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
            <HeaderButton>
              <Link to="/login">Log in</Link>
            </HeaderButton>
          </li>
          <li>
            <HeaderButton>
              <Link to="/signup">Sign up</Link>
            </HeaderButton>
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
