import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

import aboutBg from "../Images/table.jpg";

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
          <Container>
            <Row>
              <Col>
                <h2 style={{ color: "#fff" }}>About</h2>  {/* Ensure text is visible */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default About
