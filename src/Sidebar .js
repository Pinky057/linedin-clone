import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar () {

    const recentItems =( topic) =>(

    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg?size=626&ext=jpg" alt=""/>
                <Avatar className='sidebar_avatar'/>
                <h2>Ishrat Jahan Pinky</h2>
                <h4>ishratjahanpinky2@gmail.com</h4>
            </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2345</p>
            </div>
            <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2443</p>
            </div>
        </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItems('recatJs')}
                {recentItems('recatNative')}
                {recentItems('UX/UI')}
                {recentItems('Programming')}
                {recentItems('Jobs')}
                {recentItems('SoftwareDevelopment')}
                {recentItems('JavaScript')}
                {recentItems('Design')}
            </div>
        </div>
    );
}

export default Sidebar 
