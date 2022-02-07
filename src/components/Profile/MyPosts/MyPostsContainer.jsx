import React from "react";
import {
	addPostCreator,
	updateNewPostCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostCreator());
	};
	let onPostChange = (newText) => {
		let action = updateNewPostCreator(newText);
		props.store.dispatch(action);
	};

	return (
		<MyPosts
			updateNewPostCreator={onPostChange}
			addPost={addPost}
			postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
		/>
	);
};

export default MyPostsContainer;
