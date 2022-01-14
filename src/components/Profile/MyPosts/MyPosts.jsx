import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postArray = props.postsData.map((num) => (
		<Post message={num.message} countLikes={num.likes} />
	));
	let newPostElement = React.createRef();
	let addPost = () => {
		props.addPost();
		props.updateNewPostText('');
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
