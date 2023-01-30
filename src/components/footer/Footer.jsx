import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
    return(
        <footer id='footer'>
            <a href="#" className='footer__logo'>Paul Levites</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">My Experience</a></li>
                {/* <li><a href="#services"></a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

           <div className="footer__socials">
            <a href="https://facebook.com"><AiFillFacebook/></a>
            <a href="https://twitter.com"><AiFillTwitterCircle/></a>
            <a href="https://instagram.com"><AiFillInstagram/></a>
            <a href="https://linkedin.com"><AiFillLinkedin/></a>
            <a href="https://github.com"><AiFillGithub/></a>
            </div> 

            <div className="footer__copyright">
                <small>&copy; Paul Levites. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer