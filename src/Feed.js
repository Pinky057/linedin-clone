import React, {useEffect, useState} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/Event';

import './Feed.css';
import InputOptions from './InputOptions';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
     const [input, setInput] = useState('');

    useEffect(() => {
       db.collection("posts").onSnapshot((snapshot) =>
       setPosts(
           snapshot.docs.map((doc)=>({
            id: doc.id,
            data: doc.data(),
           }))
       )
       );
        
    }, []);
        
    const sendPost= e =>{
        e.preventDefault();
        db.collection('posts').add({
             name: 'Ishrat Pinky',
             description: 'this is a test',
             message: input,
             photoUrl:'',
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };

    return ( 
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input
                        value={input} 
                        onChange={e=>setInput(e.target.value)} 
                        type="text"
                         />
                        <button
                         onClick={sendPost}
                           type="submit" > Send
                            </button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                 <InputOptions Icon={ImageIcon}  title='Photo' color='#70B5F9'/>
                 <InputOptions Icon={SubscriptionsIcon}  title='Video' color='#E7A33E'/>
                 <InputOptions Icon={EventNoteIcon}  title='Event' color='#C0CBCD'/>
                 <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
                </div>
            </div>
            {posts.map(({ id, data:{ name, description, message, photoUrl }
            }) =>
            (
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
            {/* <Post name='Ishrat Pinky' description='test' message='Worked' /> */}
        </div>
    )
}

export default Feed;
