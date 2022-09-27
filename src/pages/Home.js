import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import Profil from '../img/prof.png';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <div className='info'>
          <h2>Hi, My Name is Iancut Eusebiu Sebastian </h2>
          <img src={Profil} alt='profil'></img>
        </div>
        <div className='prompt'>
          <p>A college graduate with passion for learning and creating. </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>

        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> ReactJS, HTML, CSS, Bootstrap, MaterialUI</span>
          </li>

          <li className='item'>
            <h2>Back-End</h2>
            <span>Java, My SQL</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, C#, C, C++</span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home