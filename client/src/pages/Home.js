import HomeStyles from '../styles/Home.module.css';
import Card from '@mui/material/Card';
import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {

    return (
            <div className={HomeStyles['grid-container']}>
                <Card className={HomeStyles['chat-container']}>
                    <Sidebar />
                    <Chat />
                </Card>
            </div>
    )
}

export default Home