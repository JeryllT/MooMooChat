import Profile from './Profile'
import ChatStyles from '../../styles/Chat.module.css'

const Sidebar = () => {
  return (
    <>
        <Profile />
        <div className={ChatStyles['searchbar']}>
            Search Bar
        </div>
        <div className={ChatStyles['contacts']}>
            contacts
        </div>
    </>
  )
}

export default Sidebar