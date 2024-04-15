import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
    <div className="container">
        <div className="contact-us-container">
            <h1> Contact Us </h1>
            <p>We'd love to hear form you. pleace fill out the 
               form below or reach out
               to us using the contact details provided.
            </p>
            <form className='contact-form'>
                <div className="form-group">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id='name' name='name' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email"> Email: </label>
                    <input type="email" id='email' name='email' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Message"> Message: </label>
                    <textarea id='message' name='message' rows="5" required></textarea>
                </div>
                <button type='submit' className='submit-btn'> Submit </button>
            </form>
        </div>
    </div>

    
    
    </>
  )
}

export default ContactUs