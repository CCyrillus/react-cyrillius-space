const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = {
	postsData: [
		{ id:1, message: "Hello React, it is my first post!)", likes: 11 },
		{ id:2, message: "AS WE CAN!", likes: 21 },
		{ id:3, message: "Light weight baby!!", likes: 33 },
		{ id:4, message: "No Country for Old Men!)", likes: 19 },
	],
	newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST: {
			return { ...state, newPostText: action.text };
		}
		case ADD_POST:
      let newPost = {
				id: state.postsData.length + 1,
				message: state.newPostText,
				likes: Math.floor(Math.random() * 36),
			};
			let stateCopy = { 
        ...state, 
        postsData: [...state.postsData, newPost],
        newPostText: ""
      };
			
			return stateCopy;

		default:
			return state;
	}
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (newText) => ({
	type: UPDATE_NEW_POST,
	text: newText,
});
