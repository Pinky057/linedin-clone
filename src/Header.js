import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className='header'>
           <div className='header_left'>

               <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
            
               <div className='header_search'>
                   <SearchIcon/>
                   <input type='text'/>
               </div>
               
               </div>  
           <div className='header_right'>
               
               <HeaderOption Icon={HomeIcon} title='Home'/>
               <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
               <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
               <HeaderOption Icon={ChatIcon} title='Messaging'/>
               <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                 <HeaderOption avatar="https://pbs.twimg.com/profile_images/1156300677703798784/kZtLxV4v.jpg" title='me'/>
               </div> 
        </div>
    )
}

export default Header;
