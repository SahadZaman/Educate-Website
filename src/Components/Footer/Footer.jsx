import React from 'react'
import './Footer.css'
import footer from '../../assets/images/footer.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleClick = ()=>{
        window.scrollTo(0,0);
    }
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer-box">
                        <div className="logo">
                            <div className="logo-img">
                                <img src={footer} alt="" />
                            </div>
                            <h2>EduTech</h2>
                        </div>
                        <p>Embrace The future of innovation and technology with our cutting-edge business solutions</p>

                    </div>

                    <div className="footer-box">
                        <h4 className='footer_title'>Company</h4>
                        <ul className='footer_links'>
                            <li><Link to={'/courses'} onClick={handleClick}> Our Programs </Link></li>
                            <li><Link to={'/servieces'} onClick={handleClick}> Our Plan </Link></li>
                            <li><a href="">Become a member</a></li>
                        </ul>

                    </div>

                    <div className="footer-box">
                        <h4 className='footer_title'> Quik Links </h4>
                        <ul className='footer_links'>
                            <li><Link to={"/about"} onClick={handleClick}>About Us</Link></li>
                            <li><Link to={'/contact'} onClick={handleClick}>Contact</Link></li>
                            <li><Link to={"/support"} onClick={handleClick}> Support Us </Link></li>
                        </ul>

                    </div>

                </div>
            </div>



        </footer>
    )
}

export default Footer