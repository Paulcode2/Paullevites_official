import React from 'react'
import Cv from '../../assets/Image to PDF 20241012 12.06.39.pdf'
const CTA = () => {
    return(
        <div className='cta'>
            <a href={Cv} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Hire me</a>
        </div>
    )
}

export default CTA