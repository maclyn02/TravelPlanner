import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__copyright">
                <div>
                    <CopyrightIcon />
                </div>
                <div className='footer__text'>
                    Maclyn Afonso 2020 - 2021
                </div>
            </div>
        </div>
    )
}

export default Footer
