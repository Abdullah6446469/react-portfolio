import React from 'react';
import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'; 


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, []);
  
  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="interactive-paragraph">
            <p>
              I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
            I possess unwavering confidence, a relentless spirit of curiosity, and 
            an unyielding commitment to refining my skills through every challenge 
            that comes my way. Each obstacle I encounter is an opportunity to elevate 
            my capabilities as a programmer, pushing my boundaries and expanding my horizons. 
            With an insatiable thirst for knowledge, I embark on a continuous journey of 
            self-improvement, mastering the intricate nuances of coding and problem-solving. 
            My passion for innovation drives me to excel, not just in my work, but in 
            transforming the way we perceive and interact with technology.
            </p>
            <p>
            "In a single sentence, I encapsulate the essence of a relentless hard-worker, a 
            resourceful problem-solver, and an unwaveringly dedicated student, fueled by an 
            insatiable passion for technology. As a fervent sports enthusiast, I bring a 
            dynamic energy that complements my tech-obsessed mindset, forging a path that 
            seamlessly converges innovation and determination. My pursuit of excellence 
            extends beyond the boundaries of academia, as I actively seek a position within 
            a pioneering Tech Company, armed with the agility to navigate diverse social media 
            landscapes and adeptly harness the power of cutting-edge office technologies. 
            My unshakable organizational prowess and a proven track record of orchestrating 
            successful IT projects and volunteering initiatives further define my commitment 
            to surpassing expectations and propelling impactful change.
            </p>
          </div>
        </div>
 
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About
 
