import React from 'react';
import './Hero.css';
import profile from '../../Assests/profile-pic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt='Profile' />
        <h1><span>I'm Kunal Sarkar,</span> Software Engineer based in India.</h1>
        <div className='hero-action'>
            <div className='hero-connect' tabIndex={0}><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume' tabIndex={0}>My resume</div>
        </div>
    </div>
  );
}

export default Hero;
