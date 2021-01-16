import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from '../StateProvider';
import { Tooltip, withStyles } from '@material-ui/core';

function Header() {

    const [user, dispatch] = useStateValue()

    const handleLogout = () => {
        if (user)
            dispatch({
                type: 'SET_USER'
            })
    }

    const LightTooltip = withStyles(() => ({
        tooltip: {
            fontSize: 15,
            padding: 10,
        },
    }))(Tooltip)

    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <span className='header__logoText'>Travel Planner</span>
                </Link>
            </div>
            <div className='header__linksContainer'>
                <Link to={user.user ? '/' : '/login'} onClick={event => handleLogout()}>
                    <LightTooltip title={user.user ? user.user : 'Guest'} arrow>
                        <div className='header__links'>
                            <div>
                                <AccountCircleIcon />
                            </div>
                            <div>
                                <span>{user.user ? 'Logout' : 'Login'}</span>
                            </div>
                        </div>
                    </LightTooltip>
                </Link>
            </div>
        </div>
    )
}

export default Header
