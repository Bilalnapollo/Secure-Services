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
                <h2 style={{ color: "#fff" }}>About Us</h2>  {/* Ensure text is visible */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <section>
        <Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste sequi eveniet ipsum. Error cumque ipsum delectus molestias provident cum, harum deleniti placeat commodi exercitationem minima dignissimos facere nisi hic modi. Vero ex maxime excepturi quo dolores iusto nobis ipsum debitis. Quam numquam molestiae animi veniam non officia provident ipsam, optio tenetur eaque ipsum accusamus quidem nam aliquam modi consectetur dolores id officiis ullam quaerat voluptas. Dolor reiciendis eaque animi voluptas odio provident enim earum error ab vel laborum aliquam minima, odit expedita maiores quae, molestiae assumenda quos veniam? Natus, totam iure quas laudantium deserunt magni commodi delectus accusamus earum?</p>
        </Container>
      </section>
    </>
  )
}

export default About
