import ChatStyles from '../styles/Chat.module.css';
import Card from '@mui/material/Card';
import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {

    return (
            <div className={ChatStyles['grid-container']}>
                <Card className={ChatStyles['chat-container']}>
                    <Sidebar />
                    <Chat />
                </Card>
            </div>
    )
}

export default Home