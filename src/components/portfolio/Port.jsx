import React from 'react'
import './port.css'
// import Auth from '../../assets/User Auth.PNG'
const Port = () => {
    return(
        <section id='portfolio'>
            <h5>My works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                <h3> User Auth</h3>
                        <a href="https://github.com/Paulcode2/User-Authentication" rel="noreferrer" className='btn' target="_blank">Github</a>
                        <a href="https://user-authentication-nine.vercel.app/" rel="noreferrer"  className='btn btn-primary select'  target="_blank">Live Demo</a>
                    <div className="portfolio__item-image">
                        
                    </div>
                </article>
            <article className="portfolio__item">
            <h3>Kings Chat</h3>
                        <a href="https://github.com/Paulcode2/User-Authentication" rel="noreferrer" className='btn' target="_blank">Github</a>
                        <a href="https://user-authentication-nine.vercel.app/" rel="noreferrer"  className='btn btn-primary'  target="_blank">Live Demo</a>
                <div className="portfolio__item-image">
                        {/* <img src={Auth} alt="" /> */}
                    </div>
            </article>
            <article className="portfolio__item">
            <h3>Flash Blog</h3>
                        <a href="https://github.com/Paulcode2/Blop-app" rel="noreferrer" className='btn' target="_blank">Github</a>
                        <a href="https://flash-blog.vercel.app/" rel="noreferrer"  className='btn btn-primary'  target="_blank">Live Demo</a>
                <div className="portfolio__item-image">
                        {/* <img src={Auth} alt="" /> */}
                    </div>
            </article>
            <article className="portfolio__item">
            <h3> Weather App</h3>
                        <a href="https://github.com/Paulcode2/Weather-app" rel="noreferrer" className='btn' target="_blank">Github</a>
                        <a href="https://weather-appnaija.netlify.app/" rel="noreferrer"  className='btn btn-primary'  target="_blank">Live Demo</a>
                <div className="portfolio__item-image">
                        {/* <img src={Auth} alt="" /> */}
                    </div>
            </article>
            </div>
            <div className="span">
            <span>Check More Here</span>
            <a href="https://github.com/Paulcode2" rel="noreferrer" target='_blank'>Github</a>
            </div>
        </section>
    )
}

export default Port