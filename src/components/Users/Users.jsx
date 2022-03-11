import * as axios from "axios";
import React from "react";
import s from "./UsersProfile.module.css";
import ava from "../../images/Ava1.png";

class Users extends React.Component {
  constructor(props){
    super(props);
    axios
				.get("https://social-network.samuraijs.com/api/1.0/users")
				.then((response) => {
					debugger;
					this.props.setUsers(response.data.items);
				});
  }
	
	render() {
		return (
			<div className={s.users}>
				{this.props.users.map((i) => (
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
											this.props.unfollow(i.id);
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(i.id);
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
	}
}
export default Users;
