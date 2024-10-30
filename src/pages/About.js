import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import aboutBg from "../Images/banner.jpg";
import about from "../Videos/about.mp4";

const About = () => {
  return (
    <>
       <div
        className="image-container"
        style={{
          backgroundImage: `url(${aboutBg})`,  // Apply the background image here
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
                <h2 style={{ color: "#fff" }}>About Us</h2>  {/* Ensure text is visible */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <section>
        <Container data-aos="fade-left" className='about-container' >
            <div data-aos="fade-left">
              <h2>Secure Services</h2>
              <p>At Security Services, we are committed to creating safer environments through top-tier security and technology solutions. As a leading provider, we offer a comprehensive products designed to empower you with the peace of mind that comes from reliable, high-quality security.</p>
              <p>Our range includes cutting-edge CCTV and WiFi Cameras for round-the-clock monitoring, as well as Solar Cameras for sustainable, off-grid security. For emergency preparedness, we provide robust Fire & Safety equipment, ensuring quick response and safety in critical situations.</p>
              <p>In addition to security, we bring seamless access solutions with Access Control Systems and Audio-Video Door Phones—all designed to enhance security and convenience at your property’s entry points. Our advanced Attendance Machines and Cash Counter Machines bring streamlined efficiency to your workplace, while our Metal Detectors and Signal Routers reinforce high-standard operational protocols.</p>
              <p>For added convenience, we also offer Printers, External Hard Drives, and Wireless Sets & Accessories, along with reliable Telephone Exchange systems for streamlined communication. With each product, our goal is to provide lasting quality and performance you can rely on.</p>
              <p>Explore Security Services today—where security meets technology, and your safety is our top priority.</p>
            </div>
            <div className='a-video' data-aos="fade-right">
              <video  controls>
                <source src={about} type="video/mp4" />
                Your browser does not support HTML video.
              </video> 
            </div>
              
        </Container>
      </section>

      {/* <video  controls>
              <source src={about} type="video/mp4" />
              Your browser does not support HTML video.
            </video> */}
      
    </>
  )
}

export default About


// Acha mujhe about page ke liye discription likh do jo bhot attractive ho jis main meri products ke barey main likh do company ka namee aap ko pata security services hai hamary products main cctv cameras,wifi Cameras,Solar Cameras,Fire & Safety,Access Control,Door Phones Audio Video,Attendance Machines,Cash Counter Machines,Matel Detecter,Signal Routers,Printers,External Hard Drives,Wireless Sets & Accessories and Telephone Exchange hai bs in k barey main attractice sa about page ki discription likh do