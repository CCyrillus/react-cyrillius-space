import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialog = (props) => {
	let dialogItem = props.dialogsData.map((d) => (
		<DialogItem name={d.name} key = {d.id} id={d.id} />
	));
	let messageArray = props.messagesData.map((m) => (
		<Message txt={m.txt} key = {m.id} id={m.id} />
	));
	let newMessageElement = React.createRef();
	let onAddMessage = () => {
		props.addMessage();
	};
	let onMessageChange = () => {
		let newText = newMessageElement.current.value;
		props.updateNewMessageBody(newText);
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
							ref={newMessageElement}
							value={props.newMessageText}
							onChange={onMessageChange}
						></textarea>
					</div>
					<div>
						<button onClick={onAddMessage}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
