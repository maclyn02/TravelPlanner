import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import './CSS/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__copyright">
                <div>
                    <CopyrightIcon />
                </div>
                <div className='footer__text'>
                    Maclyn Afonso 2020 - 2021 (images not included)
                </div>
            </div>
        </div>
    )
}

export default Footer
