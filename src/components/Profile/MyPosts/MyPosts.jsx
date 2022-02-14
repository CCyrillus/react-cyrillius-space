import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postArray = props.postsData.map((num) => (
		<Post message={num.message} countLikes={num.likes} />
	));
	let newPostElement = React.createRef();
	let onAddPost = () => {
    props.addPost();
	};
	let onPostChange = () => {
		let newText = newPostElement.current.value;
		props.updateNewPostText(newText);
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
					<button onClick={onAddPost}>Share</button>
				</div>
			</div>
			<div className={s.posts}>{postArray}</div>
		</div>
	);
};

export default MyPosts;
