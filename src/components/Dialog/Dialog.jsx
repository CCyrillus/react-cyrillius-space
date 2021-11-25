import React from "react"
import s from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}
const Message = (props) => {
  return (
    <div className={s.dialog}>
      {props.txt}
    </div>
  )
}

const Dialog = () => {

  let dialogs = [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Semen" },
    { id: 3, name: "Gleb" },
    { id: 4, name: "Marianna" },
    { id: 5, name: "Sanchez" },
    { id: 6, name: "Alina" },
  ];

  let message = [
    { id: 1, txt: 'Hello!' },
    { id: 2, txt: 'How are you?!' },
    { id: 1, txt: 'Good! What about you?) What new?' },
    { id: 2, txt: "YoYoYo" },
    { id: 2, txt: "AeAeAe" },
    { id: 2, txt: "MMM NICE" },
  ]

  let dialogItem = dialogs.map(d => (<DialogItem name={d.name} id={d.id} />));
  let messageArray = message.map(m => (<Message txt={m.txt} id={m.id} />));ad

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