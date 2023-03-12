import ChatStyles from '../styles/Chat.module.css';
import Card from '@mui/material/Card';
import Chat from '../components/Chat';
import Contacts from '../components/Contacts';
import HeaderRight from '../components/HeaderRight';
import HeaderLeft from '../components/HeaderLeft';
import SearchBar from '../components/SearchBar';

const Home = () => {

    return (
            <div className={ChatStyles['grid-container']}>
                <Card className={ChatStyles['chat-container']}>
                    <HeaderLeft />
                    <HeaderRight />
                    <SearchBar />
                    <Contacts />
                    <Chat />
                </Card>
            </div>
    )
}

export default Home