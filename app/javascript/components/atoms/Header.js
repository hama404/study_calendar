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
          {!Object.keys(props.user).length ? (
            <React.Fragment>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <a href="#!" onClick={props.handleOpen}>
                  add study record
                </a>
              </li>
              <li>
                {props.user.uid}
              </li>
              <li>
                <a href="#!" onClick={props.signout}>
                  Sign out
                </a>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header;