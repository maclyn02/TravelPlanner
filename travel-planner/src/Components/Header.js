import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <span className='header__logoText'>Travel Planner</span>
                </Link>
            </div>
            <div className='header__linksContainer'>
                <Link to='login'>
                    <div className='header__links'>
                        <div>
                            <AccountCircleIcon />
                        </div>
                        <div>
                            <span>Sign-In</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
