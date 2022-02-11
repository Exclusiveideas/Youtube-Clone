import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Sidebar = () => {
  return (
    <div className="sidebar" >
        <SideBarRow title="Home" Icon={HomeIcon} />
        <SideBarRow title="Trending" Icon={WhatshotIcon}  />
        <SideBarRow title="Subscription" Icon={SubscriptionsIcon}  />
    </div>
  )
}

export default Sidebar