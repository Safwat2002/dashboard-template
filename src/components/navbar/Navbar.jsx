import './navbar.scss';

import SearchIcon from '@mui/icons-material/Search';
import { ChatBubbleOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material';

import UserAvatar from '../../assets/imgs/user-image.png'
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function Navbar() {
  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === '' ? 'dark' : '');
  };

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" id="search" placeholder='Search'/>
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon' />
            English
          </div>

          <div className="item" onClick={changeTheme}>
            <DarkModeOutlined className='icon' />
          </div>

          <div className="item">
            <FullscreenExitOutlined className='icon' />
          </div>

          <div className="item">
            <NotificationsNoneOutlined className='icon' />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlined className='icon' />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListOutlined className='icon' />
          </div>

          <div className="item">
            <img src={UserAvatar} alt="User Avatar" className='avatar'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar