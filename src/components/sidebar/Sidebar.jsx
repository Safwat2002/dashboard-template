import './sidebar.scss';

import { DashIcon, UsersIcon,DeliveryIcon,HealthIcon,LogoutIcon,LogsIcon,NotificationsIcon,OrdersIcon,ProductsIcon,ProfileIcon,SettingsIcon,StatsIcon } from './icons';

import { Link } from "react-router-dom";

import {useContext } from 'react';

import { ThemeContext } from '../../App';

function Sidebar() {

  const {theme, setTheme} = useContext(ThemeContext);

  
  const setLightMode = () => {
    if(theme === 'dark'){
      setTheme('');
    }
  }

  const setDarkMode = () => {
    if(theme === ''){
      setTheme('dark');
    }
  }


  return (
    <div className='sidebar'>
      <div className="top">
        <Link to={'/'} style={{textDecoration:"none"}}>
          <span className="logo">Admin Control Panel </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <li>
              <DashIcon className='icon' />
              <span>Dashborad</span>
            </li>
          </Link>

          <p className="title">LISTS</p> 
          <Link to={'/users'} style={{textDecoration:"none"}}>
            <li>
              <UsersIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>

          <Link to={'/products'} style={{textDecoration:"none"}}>
            <li>
              <ProductsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>

          <Link to={'/list'} style={{textDecoration:"none"}}>
            <li>
              <OrdersIcon className='icon' />
              <span>Orders</span>
            </li>
          </Link>

          <li>
            <DeliveryIcon className='icon' />
            <span>Delivary</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <StatsIcon className='icon' />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <HealthIcon className='icon' />
            <span>System Health</span>
          </li>

          <li>
            <LogsIcon className='icon' />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <ProfileIcon className='icon' />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>

        </ul>
      </div>

      {/* the first color option is for light mode and the second is for dark mode */}
      <div className="bottom themeBttons">
        <div className="colorOption" onClick={setLightMode}></div>
        <div className="colorOption" onClick={setDarkMode}></div>
      </div>
    </div>
  )
}

export default Sidebar