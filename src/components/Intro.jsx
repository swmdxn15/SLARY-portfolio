import React from 'react';
import {Link} from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import '../styles/Intro.css';


const Intro = () => {
  const animate = ['swmdwn here.'];
  return (
    <div id="intro">
      <p className='fractal-text'>myPortfolio.</p>
      <span className="intro-title">
        <span className="text-hi">hi, </span>
        <span className="typewriter-wrapper">
          <Typewriter
            words={animate}
            loop={false}
            typeSpeed={80}
            cursor
            cursorStyle={<span className="blinking-cursor">|</span>}
            deleteSpeed={40}
            delaySpeed={1500}
            onLoopDone={() => {
              // Animation loop complete
            }}
          />
        </span>
      </span>
      <div className='main-buttons'>
        <Link to="/skills">
          <button> Skills </button>
        </Link>
        <Link to="/projects">
          <button> Projects </button>
        </Link>
        <Link to="/experience">
          <button> Experience </button>
        </Link>
             
      </div>
    </div>
  );
};

export default Intro;

