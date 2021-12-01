import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import friend from '../../images/Friends_logo.png';
import n from '../../images/Ava1.png'

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
        <br />
        <NavLink to='/settings' className={activeLink}>Settings</NavLink>
      </div>
      <div className={classes.item}>

        <div>
          <br />
          <NavLink to='/friends' className={classes.friendsLink}>
            <img src={friend} alt="link" className={classes.img} />
          </NavLink>
        </div>

        <div className={classes.friendsBlock}>

          <div className={classes.friend}>
            <img src={n} alt="link" className={classes.avatar} />
            <div >Semen</div>
          </div>

          <div className={classes.friend}>
            <img src={n} alt="link" className={classes.avatar} />
            <div>Nikita</div>
          </div>
          
          <div className={classes.friend}>
            <img src={n} alt="link" className={classes.avatar} />
            <div>Gleb</div>
          </div>

        </div>


      </div>

    </nav >
  )
}

export default Navbar;