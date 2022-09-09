import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOptions from './InputOptions'
import "./Post.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {



    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]} </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpOffAltIcon} title='like' color='grey' />
                <InputOptions Icon={ChatIcon} title='Commenter' color='grey' />
                <InputOptions Icon={IosShareIcon} title='Partager' color='grey' />
                <InputOptions Icon={SendIcon} title='Envoyer' color='grey' />
            </div>
        </div>
    )
})

export default Post