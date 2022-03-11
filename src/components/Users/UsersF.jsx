import * as axios from "axios";
import React from "react";
import s from "./UsersProfile.module.css";
import ava from "../../images/Ava1.png";

const Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {
			axios
				.get("https://social-network.samuraijs.com/api/1.0/users")
				.then((response) => {
					debugger;
					props.setUsers(response.data.items);
				});
		}
	}; 

	return (
		<div className={s.users}>
			<button onClick={getUsers}>Get</button>
			{props.users.map((i) => (
				<div key={i.id}>
					<span>
						<div>
							<img
								src={i.photos.small != null ? i.photos.small : ava}
								alt="prop"
								className={s.avatar}
							/>
						</div>
						<div>
							{i.followed ? (
								<button
									onClick={() => {
										props.unfollow(i.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(i.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{i.name}</div>
							<div>{i.status}</div>
						</span>
						<span>
							<div>{"i.location.country"}</div>
							<div>{"i.location.city"}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
