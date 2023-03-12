import ChatStyles from '../styles/Chat.module.css';
import Card from '@mui/material/Card';

const Chat = () => {

    return (
            <div className={ChatStyles['grid-container']}>
                <Card className={ChatStyles['chat-container']}>
                    <div className={ChatStyles['header-left']}>
                        Moomoo Chat
                    </div>
                    <div className={ChatStyles['searchbar']}>
                        Search Bar
                    </div>
                    <div className={ChatStyles['contacts']}>
                        contacts
                    </div>
                    <div className={ChatStyles['header-right']}>
                        User details
                    </div>
                    <div className={ChatStyles['chat']}>
                        Current Message
                    </div>
                </Card>
            </div>
    )
}

export default Chat