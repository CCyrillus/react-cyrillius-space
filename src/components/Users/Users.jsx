import * as axios from "axios";
import React from "react";
import s from "./UsersProfile.module.css";
import ava from "../../images/Ava1.png";

class Users extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}
	onPageChange(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pageCount; i++) {
			if (pages.length < 10) {
				pages.push(i);
			}
		}
		debugger;
		return (
			<div className={s.users}>
				<div>
					{pages.map((p) => {
						return (
							<span
								className={this.props.currentPage === p && s.selectedPage}
								onClick={() => {
									this.onPageChange(p);
								}}
							>
								{p}
							</span>
						);
					})}
				</div>

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
