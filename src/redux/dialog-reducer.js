const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const dialogReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 1,
      txt: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE) {
    state.newMessageText = action.text;
  }

  return state;
}