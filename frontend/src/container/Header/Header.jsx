import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const Header = () => {

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: { duration: 0.7, ease: "easeInOut" }
        }
    }

    return (
        <div id="home" className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <motion.div whileHover={{ scale: 1.03 }} className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Olá, meu nome é</p>
                            <h1 className='head-text'>Samuel Custódio</h1>
                        </div>
                    </motion.div>


                    <motion.div whileHover={{ scale: 1.03 }} className="tag-cmp app__flex">
                        <p className="p-text">Full Stack Web Developer</p>
                    </motion.div>
                </div>
            </motion.div >

            {/* Profile Image */}
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delayChildren: 0.5 }}
                className='app__header-img'
            >
                <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 0.4, ease: "easeInOut" }} src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    src={images.circle}
                    alt='profile_circle'
                    className='overlay_circle'
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.node, images.react, images.nextjs].map((circle, index) => (
                    <motion.div className='circle-cmp app__flex' key={`circle-${index}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <img src={circle} alt={`circle-${index}`} />
                    </motion.div>
                ))}
            </motion.div>
        </div >
    )
}

export default AppWrap(Header, 'home')