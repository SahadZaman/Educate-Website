import React from 'react'
import "./Community.css"
import tc from"../../../assets/images/tc.png"

const Community = () => {
    const handleClick = ()=>{
        window.open('https://chat.openai.com','_blank')
    }
  return (
<>
    <div className="conatainer">
        <div className="start-warapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>Join our Free Tech <br />Community</h2>
                <p>Unlock the power of knowledge and innovation by joining our vibrant and free Watsapp tech community</p>
                <button className='register-btn' onClick={handleClick} >Join now</button>
            </div>
        </div>
    </div>
</>
  )
};

export default Community
