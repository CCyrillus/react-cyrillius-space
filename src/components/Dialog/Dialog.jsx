import React from "react";
import s from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialog = (props) => {
	let dialogItem = props.state.dialogsData.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));
	let messageArray = props.state.messagesData.map((m) => (
		<Message txt={m.txt} id={m.id} />
	));
	let newPostElement = React.createRef();
	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogItem}</div>

			<div className={s.dialogsMessages}>
				{messageArray}
				<br />
				<div className={s.textArea}>
					<div>
						<textarea ref={newPostElement}></textarea>
					</div>
					<div>
						<button onClick={addPost}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
