import React from "react";
import {
	addMessageCreator,
	updateNewMessageCreator,
} from "../../redux/dialog-reducer";
import StoreContext from "../../StoreContext";
import Dialog from "./Dialog";

const DialogContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().dialogPage;

				let addMessage = () => {
					store.dispatch(addMessageCreator());
				};
				let messageChange = (newText) => {
					store.dispatch(updateNewMessageCreator(newText));
				};
				return (
					<Dialog
						updateNewMessageCreator={messageChange}
						addMessage={addMessage}
						dialogPage={state}
						newMessageText={state.newMessageText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default DialogContainer;
