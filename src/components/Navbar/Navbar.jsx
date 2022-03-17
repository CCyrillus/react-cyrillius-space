import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
// import users from "../../images/userss_logo.png";
import n from "../../images/Ava1.png";
let activeLink = (navData) => (navData.isActive ? s.active : s.item);

const Navbar = () => {

	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to="/profile" className={activeLink}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/dialogs" className={activeLink}>
					Message
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/news" className={activeLink}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/music" className={activeLink}>
					Music
				</NavLink>
			</div>
			<div>
				<br />
				<NavLink to="/users" className={activeLink}>
					Users
				</NavLink>
				<div className={s.item}>
					<div className={s.usersBlock}>
						<div className={s.users}>
							<img src={n} alt="link" className={s.avatar} />
							<div>Simen</div>
						</div>

						<div className={s.users}>
							<img src={n} alt="link" className={s.avatar} />
							<div>Mykito</div>
						</div>

						<div className={s.users}>
							<img src={n} alt="link" className={s.avatar} />
							<div>Hleb</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.item}>
				<br />
				<br />
				<NavLink to="/settings" className={activeLink}>
					Settings
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
