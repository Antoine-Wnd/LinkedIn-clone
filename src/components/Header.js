import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css'
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from './firebase';
;


function Header() {


    const dispatch = useDispatch();
    const lougoutOfApp = () => {
        dispatch(logout())
        auth.signOut()

    }


    return (
        <div className='header'>


            <div className="header__left">
                <img className="icon" src="./images/logo.svg" alt="icon_linkedin" />

                <div className="header__search">

                    <SearchIcon />

                    <input type="text" placeholder='Recherche' />

                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Acceuil' />
                <HeaderOption Icon={SupervisorAccountIcon} title='Réseau' />
                <HeaderOption Icon={BusinessCenterIcon} title="Offres d'emploi" />
                <HeaderOption Icon={ChatIcon} title='Messagerie' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar="./images/avatar.png" title='Vous' onClick={lougoutOfApp} />

            </div>

        </div>


    )
}

export default Header