import { renderEntireTree } from "../render";

let state = {
	profilePage: {
		postsData: [
			{ message: "Hello React, it is my first post!)", likes: 11 },
			{ message: "AS WE CAN!", likes: 21 },
			{ message: "Light weight baby!!", likes: 33 },
			{ message: "No Country for Old Men!)", likes: 19 },
		],
    newPostText:"Type something"
	},
	dialogPage: {
		dialogsData: [
			{ id: 1, name: "Mikito" },
			{ id: 2, name: "Simen" },
			{ id: 3, name: "Hleb" },
			{ id: 4, name: "Marianna" },
			{ id: 5, name: "Sanchez" },
			{ id: 6, name: "Alina" },
		],

		messagesData: [
			{ id: 1, txt: "Hello!" },
			{ id: 2, txt: "How are you?!" },
			{ id: 1, txt: "Good! What about you?) What is new?" },
			{ id: 2, txt: "YoYoYo" },
			{ id: 2, txt: "AeAeAe" },
			{ id: 2, txt: "MMM NICE" },
		],
	},
};

window.state = state;

export const addPost = () => {
 
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likes: Math.floor(Math.random() * 36),
	};
	state.profilePage.postsData.push(newPost);
  renderEntireTree(state);
};
export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export default state;
