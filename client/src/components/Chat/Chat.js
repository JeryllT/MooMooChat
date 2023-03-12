import HomeStyles from '../../styles/Home.module.css'
import ChatStyles from '../../styles/Chat.module.css'

function Chat() {
  return (
    <div className={HomeStyles['chat']}>
        <div className={ChatStyles['recipient']}>
            User details
        </div>
        <div className={ChatStyles['messages']}>
            Current Message
        </div>
        <div className={ChatStyles['message-input']}>
            Message Input
        </div>
    </div>
  )
}

export default Chat