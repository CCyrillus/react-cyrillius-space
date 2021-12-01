import React from "react"
import classes from './Header.module.css';
import logo from '../../images/Logo3.png';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <img src={logo} alt="Logo" className={classes.img} />
      </NavLink>
    </header>
  )
}

export default Header;