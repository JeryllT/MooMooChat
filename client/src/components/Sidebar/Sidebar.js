import Profile from './Profile'
import HomeStyles from '../../styles/Home.module.css'
import SidebarStyles from '../../styles/Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={HomeStyles['sidebar']}>
        <Profile />
        <div className={SidebarStyles['searchbar']}>
            Search Bar
        </div>
        <div className={SidebarStyles['contacts']}>
            contacts
        </div>
    </div>
  )
}

export default Sidebar