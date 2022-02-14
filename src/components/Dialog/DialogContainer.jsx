
import { connect } from "react-redux";
import {
	addMessageCreator,
	updateNewMessageCreator,
} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
  return {
		dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
    newMessageText: state.dialogPage.newMessageText
	};
};
let mapDispatchToProps = (dispatch) => {
  debugger;

	return {
		updateNewMessageBody: (newText) => {
      let action = updateNewMessageCreator(newText);
			dispatch(action);
		},
    addMessage: () =>{
      dispatch(addMessageCreator())
    }
	};
};
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
