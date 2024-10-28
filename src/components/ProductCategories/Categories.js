import React,{useEffect} from 'react';
import { useParams } from "react-router-dom";
import Section from '../Section';
import { products } from '../../utils/products';
import contatcBg from "../../Images/table.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Categories = () => {

    const { categoryName } = useParams();
    

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  );

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
          <Container>
            <Row>
              <Col>
                <h2 style={{ color: "#fff" }}>{categoryName}</h2>  {/* Ensure text is visible */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
       <div>
      {/* <h2>{categoryName} Products</h2> */}
      {filteredProducts.length > 0 ? (
        <Section bgColor="#fff" productItems={filteredProducts} />
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
    </>
  )
}

export default Categories

{/* <Section title={`${categoryName} Products`} bgColor="#fff" productItems={filteredProducts} /> */}