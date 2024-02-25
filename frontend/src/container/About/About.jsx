import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss'

const About = () => {

    const aboutss = [
        { title: 'Backend', description: 'Experiência em Backend como habilidade primária.', imgUrl: images.backend01 },
        { title: 'Frontend', description: 'Experiência em Frontend como habilidade secundária.', imgUrl: images.frontend01 },
        { title: 'Fullstack', description: 'Experiência e habilidade em desenvolvimento Fullstack.', imgUrl: images.fullstack01 }
    ]

    const [abouts, setAbouts] = useState('')

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query)
            .then((data) => {
                setAbouts(data)
            })
    }, [])

    return (
        <>
            <h2 className='head-text'>Um <span>bom App</span><br />significa um <span>bom trabalho</span> </h2 >
            <div className='app__profiles'>
                {abouts && abouts.map((about, index) => (
                    <motion.div
                        key={about.title + index}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2, type: 'tween' }}
                        className='app__profile-item'
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__primarybg'
)