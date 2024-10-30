import React from 'react'
import "./contact.css"

const ContactCard = () => {

  const handlePhoneRedirect = () => {
    const phoneNumber = "tel:+923009403453";
    window.open(phoneNumber, '_blank');
  };
  const handleEmaleRedirect = () => {
    const email = "mailto:sohailbuttlhr42@gmail.com";
    window.open(email, '_blank');
  };
  const handleAddressRedirect = () => {
    const address = "https://www.google.com/maps?q=Pakistan,+Lahore";
    window.open(address, '_blank');
  };
  return (
    <>
      <div className='container con-container' data-aos="fade-left">
        <div className='contact-card w-30' onClick={handlePhoneRedirect}>
              <div className='contact-header'>
                  <div className='text-xxl'>
                    <i class="fa-solid fa-phone" style={{color:"green"}}></i>
                  </div>
              </div>
              <div className='contact-middle'>
                <div>
                    <h5 className='text-xl' style={{color: "black"}}>Contact Number</h5>
                </div>
              </div>
              <div className='contact-bottom' >
                  <p className='text-lg'>+92 3009403453</p>
              </div>
        </div>
        <div className='contact-card w-30' onClick={handleEmaleRedirect}>
              <div className='contact-header'>
                  <div className='text-xxl'>
                  <i class="fa-solid fa-envelope" style={{color:"blue"}}></i>
                  </div>
              </div>
              <div className='contact-middle'>
                <div>
                    <h5 className='text-xl'  style={{color: "black"}}>Email Address</h5>
                </div>
              </div>
              <div className='contact-bottom'>
                  <p className='text-lg'>sohailbuttlhr42@gmail.com</p>
              </div>
        </div>
        <div className='contact-card w-30' onClick={handleAddressRedirect}>
              <div className='contact-header'>
                  <div className='text-xxl'>
                  <i class="fa-solid fa-location-dot" style={{color:"red"}}></i>
                  </div>
              </div>
              <div className='contact-middle'>
                <div>
                    <h5 className='text-xl'  style={{color: "black"}}>Our Address</h5>
                </div>
              </div>
              <div className='contact-bottom'>
                  <p className='text-lg'>Pakistan, Lahore</p>
              </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard
