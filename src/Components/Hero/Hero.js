import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';
import profile from '../../Assests/profile-pic.png';
import resume from '../../Assests/Resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [typingText, setTypingText] = useState('');

  const texts = useMemo(() => ["a Software Developer", "an Android Developer", "a Web Developer"], []);

  useEffect(() => {
    const text = texts[textIndex];
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypingText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTextIndex((textIndex + 1) % texts.length);
        }, 1000); // Wait 1 second before changing text
      }
    }, 100); // Typing speed (milliseconds per character)

    return () => clearInterval(interval);
  }, [textIndex, texts]);

  const handleResumeClick = (event) => {
    event.preventDefault();
    window.open(resume, '_blank');
  };

  return (
    <div id='home' className='hero'>
        <div className='hero-bg'></div>
        <img src={profile} alt='Profile' className='profile-img floating' />
        <h1><span className="name-highlight">I'm Kunal Sarkar,</span> <span id="changing-text">{typingText}</span></h1>
        <div className='hero-action'>
            <div className='hero-connect' tabIndex={0}>
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className='hero-resume' tabIndex={0} onClick={handleResumeClick}>My resume</div>
        </div>
        <div className='hero-social'>
            <a href='https://www.linkedin.com/in/sarkar-kunal/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
            <a href='https://github.com/Kunalsarkar404' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
        </div>
    </div>
  );
}

export default Hero;
