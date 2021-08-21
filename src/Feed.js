import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/Event';

import './Feed.css';
import InputOptions from './InputOptions';


function Feed() {
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit" >Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                 <InputOptions Icon={ImageIcon}  title='Photo' color='#70B5F9'/>
                 <InputOptions Icon={SubscriptionsIcon}  title='Video' color='#E7A33E'/>
                 <InputOptions Icon={EventNoteIcon}  title='Event' color='#C0CBCD'/>
                 <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
                </div>
            </div>
        </div>
    )
}

export default Feed;
