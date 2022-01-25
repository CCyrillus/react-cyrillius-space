import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postArray = props.postsData.map((num) => (
		<Post message={num.message} countLikes={num.likes} />
	));
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch({type: 'ADD-POST'});
	};
	let onPostChange = () => {
		let newText = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST', text: newText};
    props.dispatch(action);
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
