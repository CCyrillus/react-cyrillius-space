import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";

const Profile = (props) => {

	return (
		<div className={s.profilePage}>
			<ProfileHeader />
			<MyPosts
       postsData={props.profilePage.postsData}
       addPost={props.addPost}
       updateNewPostText={props.updateNewPostText}
       newPostText ={props.profilePage.newPostText}
      />
		</div>
	);
};

export default Profile;
