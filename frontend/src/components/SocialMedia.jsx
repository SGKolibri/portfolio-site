import React from 'react'

import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://github.com/SGKolibri" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/_carvalhosamuel/" target="_blank" rel="noreferrer"><BsInstagram /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/samuel-cust%C3%B3dio/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            </div>
        </div>
    )
}

export default SocialMedia