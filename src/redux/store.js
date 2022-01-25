const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

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
    newMessageText:"",
		},
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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this.getState().profilePage.newPostText,
				likes: Math.floor(Math.random() * 36),
			};
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.newPostText = "";
			this._rerenderTree(this);
		} else if (action.type === UPDATE_NEW_POST) {
			this._state.profilePage.newPostText = action.text;
			this._rerenderTree(this);
		}
		if (action.type === ADD_MESSAGE) {
			let newMessage = {
				id: 1,
				txt: this.getState().dialogPage.newMessageText,
			};
      this._state.dialogPage.messagesData.push(newMessage);
			this._state.dialogPage.newMessageText = "";
			this._rerenderTree(this);
		} else if (action.type === UPDATE_NEW_MESSAGE) {
			this._state.dialogPage.newMessageText = action.text;
			this._rerenderTree(this);
		}
	},
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (newText) => ({
	type: UPDATE_NEW_POST,
	text: newText,
});

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageCreator = (newText) => ({
	type: UPDATE_NEW_MESSAGE,
	text: newText,
});
export default store;
window.store = store;
