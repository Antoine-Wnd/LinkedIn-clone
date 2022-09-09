import { Avatar } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="./images/profil_background.png" alt="profil_background" />
                <Avatar src={user.photoURl} className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.email}</h2>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Relations </p>
                    <p className="sidebar__statNumber">45</p>
                </div>
                <div className="sidebar__stat">
                    <p>Vues de votre profil </p>
                    <p className="sidebar__statNumber">57</p>
                </div>
                <div className="sidebar__elements">
                    <BookmarkIcon />
                    <p className='sidebar__element'>Mes éléments </p>
                </div>

            </div>

            <div className="sidebar__buttom">
                <p>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('Programation')}
                {recentItem('SoftwareEngenering')}
                {recentItem('Design')}
                {recentItem('Programation')}
            </div>
        </div>

    )
}

export default Sidebar