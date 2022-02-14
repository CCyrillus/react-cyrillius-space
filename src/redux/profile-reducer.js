const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
	postsData: [
		{ message: "Hello React, it is my first post!)", likes: 11 },
		{ message: "AS WE CAN!", likes: 21 },
		{ message: "Light weight baby!!", likes: 33 },
		{ message: "No Country for Old Men!)", likes: 19 },
	],
	newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let stateCopy = { ...state };
			let newPost = {
				id: 5,
				message: stateCopy.newPostText,
				likes: Math.floor(Math.random() * 36),
			};
			stateCopy.postsData = [...state.postsData];
			stateCopy.postsData.push(newPost);
			stateCopy.newPostText = "";
			return stateCopy;
		case UPDATE_NEW_POST: {
			let stateCopy = { ...state };
      
			stateCopy.newPostText = action.text;
			return stateCopy;
		}

		default:
			return state;
	}
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (newText) => ({
	type: UPDATE_NEW_POST,
	text: newText,
});
