import React from 'react';
import s from './Dialog.module.css';
import  DialogItem  from './DialogItem/DialogItem.jsx';
import  Message  from './Message/Message.jsx';

const Dialog = (props) => {

  let dialogItem = (props.dialogsData).map(d => (<DialogItem name={d.name} id={d.id} />));
  let messageArray = (props.messagesData).map(m => (<Message txt={m.txt} id={m.id} />));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogItem}
      </div>

      <div className={s.dialogsMessages}>
        {messageArray}
      </div>
    </div>
  )
}

export default Dialog;