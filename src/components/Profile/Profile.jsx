import React from "react";
import s from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

	return (
		<div className={s.profilePage}>
			<ProfileHeader />
			<MyPostsContainer store = {props.store}/>
		</div>
	);
};

export default Profile;
