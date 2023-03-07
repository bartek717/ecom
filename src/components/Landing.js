import React from 'react'
import ecommind from '../assets/ecommind.png'
import '../styles/Landing.css'
import TypingText from './Typewriter'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
        <img src={ecommind} alt="ecommind" className='logo'/>
        <br />
        <h1 className='title'>Transforming Ecommerce with AI</h1>
        <h2 className='description'>   
            EcomMind is a startup that uses AI for rapid deployment of ecommerce solutions. Our goal is to break down the barriers of launching a product online, and making the process effortless. See how Ecommind can help you launch in less than 30 minutes.
        </h2>
        <h1 className='generator'>AI generated <span className='typingtext'><TypingText /></span></h1>
        <br />
        <Link to='/form'>
            <button className='button1'>Get 50% off when we release</button>
        </Link>
    </div>
  )
}

export default Landing