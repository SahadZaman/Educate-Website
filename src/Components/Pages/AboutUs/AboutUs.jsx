import React from 'react'
import "./AboutUs.css"
import sahad from '../../../assets/images/sahad.png'
const AboutUs = () => {
  return (
    <>
    <div className="container">
        <div className="about-us-container">
            <div className="team-members">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img className='member-image' src={sahad} alt="Sahad Zaman" />
                    <h2 className='member-name'>Sahad Zaman</h2>
                    <p className='member-role'>Co-Founder</p>
                </div>

            </div>
            <div className="about-us-description">
                <div className="about-us-heading">About Us</div>

                <p>With a passion for empowering lerners of all age,or mission
                   is to make education accesible,engaging, and personalized 
                   through our cutting-edge educational technology platform 
                

                </p>

            </div>
        </div>
    </div>
    </>
  )
};

export default AboutUs
