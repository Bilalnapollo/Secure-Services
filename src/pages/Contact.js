import React, { useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import contatcBg from "../Images/table.jpg";
import ContactCard from '../components/Contact/ContactCard';
import ContactForm from '../components/Contact/ContactForm';


const Contact = () => {
  useEffect(() => {
    // Scroll to the top of the page on component load
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${contatcBg})`,  // Apply the background image here
          backgroundSize: "cover",             // Ensures the image covers the entire area
          backgroundPosition: "center",        // Centers the image
        //   height: "100vh",          
          position: "relative"
        }}
      >
        <div className="overlay" style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center"
        }}>
          <Container data-aos="fade-up">
            <Row>
              <Col>
                <h2 style={{ color: "#fff" }}>Conatct</h2>  {/* Ensure text is visible */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <ContactCard />
      <ContactForm heading="Let's Connect."/>
    </>
  )
}

export default Contact
