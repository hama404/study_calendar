import React from 'react'
import { Link } from 'react-router-dom';
import { BsCalendar, BsList, BsPlusCircle, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

const Menus = (props) => {
  return (
    <nav>
    <ul>
      {!props.user ? (
        <>
          <li className="main">
            <Link to="/login" className="link-btn">
              Log in
            </Link>
          </li>
          <li className="main">
            <Link to="/signup" className="link-btn">
              Sign up
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="main">
            <Link to="/calendar" className="link-icon-btn">
              <BsCalendar />
            </Link>
          </li>
          <li className="main">
            <Link to="/lists" className="link-icon-btn">
              <BsReverseLayoutTextSidebarReverse />
            </Link>
          </li>
          <li>
            <a onClick={props.toggleDialog(true)} className="link-icon-btn">
              <BsPlusCircle />
            </a>
          </li>
          <li>
            <a onClick={props.toggleDrower(true)} className="link-icon-btn">
              <BsList />
            </a>
          </li>
        </>
      )}
    </ul>
  </nav>  )
}

export default Menus
