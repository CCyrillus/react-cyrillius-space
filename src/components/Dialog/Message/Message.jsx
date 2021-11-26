import React from "react"
import s from './../Dialog.module.css';

const Message = (props) => {
  return (
    <div className={s.dialog}>
      {props.txt}
    </div>
  )
}

export default Message;