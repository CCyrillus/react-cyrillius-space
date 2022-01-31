const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

export const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likes: Math.floor(Math.random() * 36),
			};
			state.postsData.push(newPost);
			state.newPostText = "";
			return state;
		case UPDATE_NEW_POST:
			state.newPostText = action.text;
			return state;
		default:
			return state;
	}
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (newText) => ({
	type: UPDATE_NEW_POST,
	text: newText,
});