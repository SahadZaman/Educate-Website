import React from 'react'
import './Courses.css'
import ai from "../../../assets/images/ai.png"
import sd from "../../../assets/images/sd.png"
import dg from "../../../assets/images/dg.png"
import haker from "../../../assets/images/hacking.png"

const Courses = () => {
  const courseData = [{
    title:"AI DEVELOPMENT",
    Desc:"Master AI development",
    img:ai,

  },
  {
    title:"DIGITAL MARKETING",
    Desc:"Master digital marketing!!!",
    img:dg,

  },
  {
    title:"CYBER SECURITY",
    Desc:"Master cyber security!!!",
    img:haker,

  },
  {
    title:"SOFTWARE DEVELOPMENT",
    Desc:"Master software development!!!",
    img:sd,

  },
];



  return (
   <div className="container course-container">
     <div className="course-top">
       <h2 className='section_title'> Our Free Courses</h2>
       <p>Top Trending Free Courses With Free certificates</p>
       <div className="course-wrapper">
        {
          courseData.map((course,index)=>(
            <div className="course-item" key={index}>
              <span className='course-icon'>
                <img src={course.img} alt="" />

              </span>
             <div className="course-content">
               <h4>{course.title}</h4>
               <p>{course.Desc}</p>
              </div>

            </div>

          ))
        }


        
       </div>


      </div>
   </div>
  )
}

export default Courses
