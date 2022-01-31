const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const dialogReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 1,
				txt: state.newMessageText,
			};
			state.messagesData.push(newMessage);
			state.newMessageText = "";
			return state;
		case UPDATE_NEW_MESSAGE:
			state.newMessageText = action.text;
      return state;
      default: return state;
	}
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageCreator = (newText) => ({
	type: UPDATE_NEW_MESSAGE,
	text: newText,
});