import React, { useState } from 'react';
import "./contact.css";
import { IoMdArrowRoundForward } from "react-icons/io";

const ContactForm = ({heading}) => {


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "923009403453"; 
    const message = `
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };



  const handleEmaleRedirect = () => {
    const email = "mailto:test@gmail.com";
    window.open(email, '_blank');
  };
  return (
    <>
      <div className='container form-container' data-aos="fade-left">
      <div className="contact-form">
          <h3 className='contact-connect'>{heading}</h3>
          <form className="contact-inputs" onSubmit={(e) => e.preventDefault()}>
          <div className='all-forms'>
          <div className='row-1'>
            <div className='form-name'>
                <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="off"
                className='w-90'
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className='form-name'>
                <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                autoComplete="off"
                className='w-90'
                value={formData.phone}
                onChange={handleChange}
                required
                />
            </div>
          </div>
          <div>
          <div>
                <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                className='w-95'
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
          </div>
            <div>
            <textarea
                name="message"
                cols="30"
                rows="5"
                autoComplete="off"
                placeholder='Your Message'
                className='w-95'
                value={formData.message}
                onChange={handleChange}
                required>

                </textarea>
            </div>
            <div className='contact-btns'>
                {/* <div className='w-50'>
                    <button className='w-90 c-btn c-btn1' onClick={handleEmaleRedirect}>Message Via Email <IoMdArrowRoundForward size={20} /></button>
                </div> */}
                <div className='c-btn-container'>
                    <button className=' c-btn c-btn1' onClick={handleWhatsAppRedirect}>Send Message <IoMdArrowRoundForward size={20} /></button>
                </div>
            </div>
          </div>
            
          </form>
        </div>
        <div className='iframe-con'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274176661!2d74.00472264497056!3d31.48310365972336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729605401699!5m2!1sen!2s" width="415" height="440" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}

export default ContactForm
