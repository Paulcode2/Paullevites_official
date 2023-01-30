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
                    Paul is a Skilled individual, who has vast knowledge and experience in programming.
<br />
Started with python, understood its functionality, and built projects with it. <br /> Moved into CMS development using the technology Wordpress, and worked as a web developer with different organizations as a freelancer. <br /> Switched from CMS development to Frontend development, and has built projects and collaborated with skilled developers to work on projects.

<br /> I currently run a blog called ‘Flash Blog’ which was built with pure vanilla HTML/JS framework.

I am also a skilled professional, who pays attention to the tiniest detail and has a high team spirit that motivates team mates.

Currently studying computer science in the University of Benin, Benin city.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About