import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <h1>
        <Link to="/">TODO APP</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <a href="#!" onClick={props.handleOpen} >
              add study record
            </a>
          </li>
          <li><a href="#">login</a></li>
          <li><a href="#">signup</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;