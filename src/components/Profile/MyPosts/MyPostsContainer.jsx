import React from "react";
import {
	addPostCreator,
	updateNewPostCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();

				let addPost = () => {
				store.dispatch(addPostCreator());
				};
				let onPostChange = (newText) => {
					let action = updateNewPostCreator(newText);
					store.dispatch(action);
				};

				return (
					<MyPosts
						updateNewPostCreator={onPostChange}
						addPost={addPost}
						postsData={state.profilePage.postsData}
						newPostText={state.profilePage.newPostText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default MyPostsContainer;
