import React from 'react'
import Cv from '../../assets/My Cv (3).jpeg'
const CTA = () => {
    return(
        <div className='cta'>
            <a href={Cv} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Hire me</a>
        </div>
    )
}

export default CTA