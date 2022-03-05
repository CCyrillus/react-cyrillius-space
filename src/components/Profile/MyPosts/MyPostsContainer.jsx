import {
	addPostCreator,
	updateNewPostCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (newText) => {
			let action = updateNewPostCreator(newText);
			dispatch(action);
		},
    addPost: () => {
      dispatch(addPostCreator());
    }
	};
};
const MyPostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
