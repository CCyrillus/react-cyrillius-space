import React from "react";
import { addMessageCreator, updateNewMessageCreator } from "../../redux/dialog-reducer";
import Dialog from "./Dialog";

const DialogContainer = (props) => {
  let state = props.store.getState().dialogPage;

	let addMessage = () => {
		props.store.dispatch(addMessageCreator());
	};
	let messageChange = (newText) => {
		props.store.dispatch(updateNewMessageCreator(newText));
	};

	return (
		<Dialog
      updateNewMessageCreator = {messageChange}
      addMessage = {addMessage}
      dialogPage = {state}
      newMessageText = {state.newMessageText}
    />
	);
};

export default DialogContainer;
