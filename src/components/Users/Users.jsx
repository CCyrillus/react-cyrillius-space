import React from "react";
import s from "./UsersProfile.module.css";

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: "http://www.kinofilms.ua/images/person/big/2748.jpg",
				name: "Cyrill",
				surname: "Cherevatyi",
				status: "IDI NAHUI RUS KORABULb",
				location: { country: "Ukraine", city: "Dnipro" },
				followed: true,
			},
			{
				id: 2,
				photoUrl: "http://www.kinofilms.ua/images/person/big/2748.jpg",
				name: "Hlib",
				surname: "Pan",
				status: "I am Boss!",
				location: { country: "Ukraine", city: "Kiev" },
				followed: true,
			},
			{
				id: 3,
				photoUrl: "http://www.kinofilms.ua/images/person/big/2748.jpg",
				name: "Marianna",
				surname: "Bass",
				status: "Я в рашке, но в душе с вами",
				location: { country: "Russia", city: "Samara" },
				followed: false,
			},
		]);
	}

	return (
		<div className={s.users}>
			{props.users.map((i) => (
				<div key={i.id}>
					<span>
						<div>
							<img src={i.photoUrl} alt="prop" className={s.avatar} />
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
							<div>{i.location.country}</div>
							<div>{i.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
