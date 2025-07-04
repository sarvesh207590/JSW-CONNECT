import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './OurTeam.css'; 
import DashboardNavbar from './DashboardNavbar';

const teamMembers = [
  {
    name: 'Vrutika Pillai',
    position: 'HR',
    image: 'Team/HR.png', 
    linkedin: 'https://www.linkedin.com/in/shobha-motghare-0a6a57238/',
  },
  {
    name: 'Sarvesh Mokal',
    position: 'Developer',
    image: 'Team/sarvesh.png', 
    linkedin: 'https://www.linkedin.com/in/payal-badhe-531756aa/',
  },
  {
    name: 'Amrita Dey',
    position: 'Designer',
    image: 'Team/Amrita.png',  
    linkedin: 'https://www.linkedin.com/in/bharti-shendre-6517b928a/',
  },
  {
    name: 'Aarya Patil',
    position: 'Advisor',
    image: 'Team/Arya.png', 
    linkedin: 'https://www.linkedin.com/in/nilima-kalambe-b275a1245/',
  },
];

const OurTeam = () => {
  return (
    <>
    <DashboardNavbar/>
    <div className="our-team">
      <h1>Meet Our Team</h1>
      <p className="team-subheading"><b>The people behind our Success</b></p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin className="linkedin-icon" /> LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
    </> );
};

export default OurTeam;
