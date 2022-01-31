import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import { addMessageCreator, updateNewMessageCreator } from "../../redux/store";

const Dialog = (props) => {
	
	let dialogItem = props.state.dialogPage.dialogsData.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));
	let messageArray = props.state.dialogPage.messagesData.map((m) => (
		<Message txt={m.txt} id={m.id} />
	));
	// let newPostElement = React.createRef();
	let addMessage = () => {
		props.dispatch(addMessageCreator());
	};
	let onMessageChange = (e) => {
		let newText = e.target.value;
		props.dispatch(updateNewMessageCreator(newText));
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogItem}</div>

			<div className={s.dialogsMessages}>
				{messageArray}
				<br />
				<div className={s.textArea}>
					<div>
						<textarea
							// ref={newPostElement}
							value={props.state.dialogPage.newMessageText}
							onChange={onMessageChange}
						></textarea>
					</div>
					<div>
						<button onClick={addMessage}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
