import ChatStyles from '../../styles/Chat.module.css'

function Chat() {
  return (
    <>
        <div className={ChatStyles['recipient']}>
            User details
        </div>
        <div className={ChatStyles['chat']}>
            Current Message
        </div>
    </>
  )
}

export default Chat