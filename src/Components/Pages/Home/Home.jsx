import React from 'react'
import meta from '../../../assets/images/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

const Home = () => {
    const handleClick =()=>{
        window.open ("https://www.youtube.com/","_blank")
    }




  return (
    <>
    <section>
        <div className="container">
            <div className="home-container">
                <div className="home-content">
                    <h2 className='section_title'>Learn Every Thing For Free !!</h2>
                    <p> Master trending technologies with EduTech , Invest Your Time and Return Skills</p>
                    <div className="home-btns">
                        <button className='register-btn' onClick={handleClick}> Get Started </button>
                        <button className='register-btn' onClick={handleClick}> Watch Now! </button>
                    </div>

                </div>
                <div className="home-img">
                    <div className="home-img-wraper">
                        <div className="box-01">
                            <div className="box-img">
                                <img src={meta} alt="" />
                            </div>
                        </div>
                        <div className="wattsapp-container">
                            <h5> 500 + Students </h5>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className="support">
                            <h5> Active Support </h5>
                        </div>
                    </div>

                </div>
            </div> 
        </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>

  )
}

export default Home
