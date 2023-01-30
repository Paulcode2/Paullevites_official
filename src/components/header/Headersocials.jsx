import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Headersocials = () => {
    return(
        <div className="Header__Socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        </div>
    )
}

export default Headersocials