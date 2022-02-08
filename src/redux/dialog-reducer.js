const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
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
}

export const dialogReducer = (state = initialState, action) => {
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
      default:
      return state;
	}
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageCreator = (newText) => ({
	type: UPDATE_NEW_MESSAGE,
	text: newText,
});