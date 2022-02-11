import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [{ query }, dispatch] = useStateValue();

  const setProvider = () => {
    dispatch({
      type: "ENTER_SEARCH",
      query: inputSearch
    })
  }

  return (
    <div className="header">
      <div className='header__left'>
        <MenuIcon className="header__left-menu" />
        <Link to="/">
          <img
            className='header__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube_logo"
          />
        </Link>
      </div>

      <div className='header__input'>
        <input value={inputSearch} placeholder='Search' type="text" onChange={(e) => setInputSearch(e.target.value)} />
        <Link to={ inputSearch && `/search/${inputSearch}`} onClick={setProvider} >
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className='header__right'>
        <VideoCallIcon className="header__right_icons" />
        <AppsIcon className="header__right_icons" />
        <NotificationsIcon className="header__right_icons" />
        <Avatar
          sizes="large"
          src='data:image/jpeg;base64,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'
          alt="picture" />
      </div>
    </div>
  );
};

export default Header;
