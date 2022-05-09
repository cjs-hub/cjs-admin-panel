import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." className="" />
          <SearchIcon className="icon" />
          
        </div>

        <div className="items">
          <div className="item">
             <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
             <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
             <NotificationsNoneOutlinedIcon className="icon" />
             <div className="counter">1</div>
          </div>
          <div className="item">
             <ChatBubbleOutlineOutlinedIcon className="icon" />
             <div className="counter">4</div>
          </div>
          <div className="item">
             <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
             <PersonIcon className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar