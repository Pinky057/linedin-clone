import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import InputOptions from './InputOptions';
import { ChatBubbleOutlineOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar/>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOptions Icon={ThumbUpAltOutlined} title='Like' color='gray'/>
                <InputOptions Icon={ChatBubbleOutlineOutlined} title='Comment' color='gray'/>
                <InputOptions Icon={ShareOutlined} title='Share' color='gray'/>
                <InputOptions Icon={SendOutlined} title='Send' color='gray'/>

            </div>
        </div>
    )
}

export default Post;
