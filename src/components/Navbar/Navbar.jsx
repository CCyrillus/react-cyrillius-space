import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

let activeLink = navData => navData.isActive ? classes.active : classes.item;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={activeLink}>Message</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' className={activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' className={activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' className={activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;