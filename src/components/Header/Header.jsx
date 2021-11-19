import React from "react"
import classes from './Header.module.css';
import logo from '../../images/Logo.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Logo"/>
    </header>
  )
}

export default Header;