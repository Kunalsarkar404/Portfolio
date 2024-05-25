import React from 'react'
import './Services.css'
import template from '../../Assests/template.png'
import Services_Data from '../../Assests/services_data'
import arrow_icon from '../../Assests/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <header className='services-title'>
            <h1>My Services</h1>
            <img src={template} alt="" />
        </header>
        <div className='services-container'>
            {Services_Data.map((service, index)=>{
                return <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt=''/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services