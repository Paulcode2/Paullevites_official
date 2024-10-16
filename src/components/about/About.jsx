import React from 'react'
import './about.css'
import Me from '../../assets/Main  (1).jpeg'
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
                            <AiFillFolderOpen className='about__icon'/>
                            <h5>Github</h5>
                            <small>
                                <a href="https://github.com/paulcode2" target='blank'>Click Me</a>
                            </small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Projects</h5>
                            <small>
                                <a href="https://linktr.ee/paullevites"target='blank'>Click Me</a>
                            </small>
                        </article>
                    </div>

                    <p>
                   I am Dedicated and detail-oriented Frontend Engineer with years of experience in Web development and frontend technologies,
                    With a goal to solve tech related problems in various institutions of the world. <br />
                    My zeal to solve problems, has resulted in me working on various projects, as well as consulting for tech startups and Educational bodies.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About