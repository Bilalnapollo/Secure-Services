import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({title,desc,cover}) => {
  return (
      <Container className='box' >
        <Row>
          <Col md={6}>
            <h1 data-aos="fade-down">{title}</h1>
            <p data-aos="fade-down">{desc}</p>
            <a data-aos="fade-up" href="https://wa.me/923009403453" target="_blank" className='btn-primary'>WhatsApp</a>
          </Col>
          <Col md={6}>
            <img src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
    
  )
}

export default SlideCard
