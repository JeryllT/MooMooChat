import ChatStyles from '../styles/Chat.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Chat = () => {

    return (
            <div className={ChatStyles['grid-container']}>
                <Card className={ChatStyles['chat-container']}>
                    <CardContent>
                        test
                    </CardContent>
                </Card>
            </div>
    )
}

export default Chat