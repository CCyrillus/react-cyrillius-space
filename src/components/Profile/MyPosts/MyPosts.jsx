import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostCreator, updateNewPostCreator } from "../../../redux/store";


const MyPosts = (props) => {
	let postArray = props.postsData.map((num) => (
		<Post message={num.message} countLikes={num.likes} />
	));
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostCreator());
	};
	let onPostChange = () => {
		let newText = newPostElement.current.value;
		props.dispatch(updateNewPostCreator(newText));
	};

	return (
		<div className={s.newPost}>
			<h3>New posts</h3>

			<div>
				<div>
					<textarea
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange}
					></textarea>
				</div>
				<div>
					<button onClick={addPost}>Share</button>
				</div>
			</div>
			<div className={s.posts}>{postArray}</div>
		</div>
	);
};

export default MyPosts;
