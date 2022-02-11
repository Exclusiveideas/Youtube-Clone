import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Sidebar = () => {
  return (
    <div className="sidebar" >
        <SideBarRow selected title="Home" Icon={HomeIcon} />
        <SideBarRow  title="Trending" Icon={WhatshotIcon}  />
        <SideBarRow  title="Subscription" Icon={SubscriptionsIcon}  />
        <hr />
        <SideBarRow  title="Library" Icon={VideoLibraryIcon} />
        <SideBarRow  title="History" Icon={HistoryIcon}  />
        <SideBarRow  title="Your videos" Icon={OndemandVideoIcon}  />
        <SideBarRow  title="Watch later" Icon={WatchLaterIcon} />
        <SideBarRow  title="liked videos" Icon={ThumbUpIcon}  />
        <SideBarRow  title="Show more" Icon={ExpandMoreIcon}  />
        <hr/>
        <div className='sidebar__sub'>
          <h5>SUBSCRIPTION</h5>
        </div>
          <SideBarRow  title="Music" Icon={MusicNoteIcon} />
        
    </div>
  )
}

export default Sidebar