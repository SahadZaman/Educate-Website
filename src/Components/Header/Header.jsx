import React from 'react'
import logo from '../../assets/images/title.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const nav_titles =[{
        path:"/",display:"Home"

    },
    {
        path:"/servieces",display:"Services"

    },
    {
        path:"/courses",display:"Courses"

    },
    {
        path:"/about",display:"About Us"

    },
    


]
  return (
    <header className='header'>
        <div className="container">
            <div className="nav_container">
                <div className="logo">
                    <div className="logo-img">
                        <img src={logo} alt=""/>
                    </div>
                    <h2> <Link to={"/"}> EduTech </Link> </h2>
                </div>
                <div className="navigation">
                    <ul className='menu'>
                        {
                            nav_titles.map((item)=>(
                            <li className='nav-item'><Link to={item.path}>{item.display}</Link></li>

                            ))
                        }
                        
                        

                    </ul>


                </div>

            </div>
        </div>

    </header>
  )
}

export default Header