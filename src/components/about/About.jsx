import React from 'react'
import './about.css'
import Me from '../../assets/WhatsApp Image 2023-01-30 at 20.12.31(1).jpeg'
import {BiTime} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
    return(
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me.</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About-img" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiTime className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ years</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Customers</h5>
                            <small>50+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <AiFillFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small>30+ Projects</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit animi cum voluptates eaque totam vel accusantium, odio itaque sapiente dolorum quam eos natus repellat. Harum quidem exercitationem officia aperiam.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About