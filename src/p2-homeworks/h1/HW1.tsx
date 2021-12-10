import Message from "./Message";
import s from './Message.module.css'

const messageData = {
  avatar: 'https://papik.pro/uploads/posts/2021-09/1631739726_7-papik-pro-p-prostie-risunki-yedinorozhki-7.jpg',
  name: 'Eduard',
  message: 'Hi, it\'s homework is done :)',
  time: '22:00',
}

function HW1() {
  return (
    <div>
      <div className={s.title}>Homework 1:</div>
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
    </div>
  )
}

export default HW1
