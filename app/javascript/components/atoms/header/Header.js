import React from 'react';
import { Link } from 'react-router-dom';

import { Drower,  Menus } from '.';

const Header = (props) => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">TODO APP</Link>
        </h1>
        <Menus
          user={props.user}
          toggleDialog={props.toggleDialog}
          toggleDrower={props.toggleDrower}
        />
      </header>
      {props.openDrower && props.user && (
        <Drower
          user={props.user}
          signout={props.signout}
          onClose={props.toggleDrower(false)}
        />
      )}
    </>
  )
}

export default Header;