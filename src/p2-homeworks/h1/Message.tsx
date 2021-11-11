import React from 'react'
import s from './Message.module.css'
type messageDataProps = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(messageData: messageDataProps) {
  return (
    <div className={s.body}>
      <div className={s.avatar}>
        <img src={messageData.avatar} alt={'ava'}/>
      </div>
      <div className={s.textBody}>
        <div className={s.name}>
          {messageData.name}
        </div>
        <div className={s.message}>
          {messageData.message}
        </div>
        <div className={s.time}>
          {messageData.time}
        </div>
      </div>
    </div>
  )
}

export default Message
