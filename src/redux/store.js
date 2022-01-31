import { profileReducer } from "./profile-reducer";
import { dialogReducer } from "./dialog-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ message: "Hello React, it is my first post!)", likes: 11 },
				{ message: "AS WE CAN!", likes: 21 },
				{ message: "Light weight baby!!", likes: 33 },
				{ message: "No Country for Old Men!)", likes: 19 },
			],
			newPostText: "",
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
			newMessageText: "",
		},
		sideBar: {},
	},
	getState() {
		return this._state;
	},
	_rerenderTree() {
		console.log("QWERTY");
	},
	subscribe(observer) {
		this._rerenderTree = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		this._rerenderTree(this);
	},
};

export default store;
window.store = store;
