import React, { useState } from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaDiscord, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoIosCall,IoIosMail} from "react-icons/io";


const Footer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    setEmail(""); 
  };

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    // navigate("/contact");
  };
  return (
    // <footer>
    //     <Container>
    //       <Row className="footer-row">
    //         <Col md={3} sm={5} className='box'>
    //           <div className="logo">
    //               {/* <ion-icon name="bag"></ion-icon> */}
    //               <h1>Secure Services</h1>
    //           </div>
    //           <p>Your safety is our priority. Explore our range of high-tech security cameras and systems designed to keep your home and business secure 24/7.</p>
    //         </Col>
    //         <Col md={3} sm={5} className='box'>
    //           <h2>Pages</h2>
    //           <ul>
    //             <li>Home</li>
    //             <li>About Us</li>
    //             <li>Products</li>
    //             <li>Contact Us</li>
    //           </ul>
    //         </Col>
    //         <Col md={3} sm={5} className='box'>
    //           <h2>Customer Care</h2>
    //           <ul>
    //             <li>Help Center </li>
    //             <li>How to Buy </li>
    //             <li>Track Your Order </li>
    //             <li>Corporate & Bulk Purchasing </li>
    //             <li>Returns & Refunds </li>
    //           </ul>
    //         </Col>
    //         <Col md={3} sm={5} className='box'>
    //           <h2>Contact Us</h2>
    //           <ul>
    //             <li>70 Washington Square South, New York, NY 10012, United States </li>
    //             <li>Email: uilib.help@gmail.com</li>
    //             <li>Phone: +1 1123 456 780</li>
    //           </ul>
    //         </Col>
    //       </Row>
    //     </Container>
    // </footer>


    <div className="footer-wrapper">
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="top-font-size">
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <Link to="/">
              <button className="whatsapp-btn">Get Started</button>
            </Link>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Secure Services</h3>
            <p>Secure Your Life with Secure Services</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form  onSubmit={(e) => {
                e.preventDefault();
                navigate("/contact");
                handleSubscribe();
              }}>
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}   
              />
              <input type="submit" value="Subscribe" />

            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div className="w-icon">
                <FaWhatsapp className="icons" />
              </div>
              <div className="f-icon">
                <FaFacebook className="icons" />
              </div>
              <div className="i-icon">
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <h3 className="icon-flex"><IoIosCall color="#0fab5b" size={25}/> +92 3009403453</h3>
            <h3 className="icon-flex"><IoIosMail color="red" size={25}/> test@gmail.com</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column rights">
            <p>
              @{new Date().getFullYear()} Bilal Kashif. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  )
}

export default Footer
