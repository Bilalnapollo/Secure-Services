import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductCard2 from "./ProductCard/ProductCard2";
import { useState } from "react";

const Section = ({ title, bgColor, productItems }) => {
  const [dotIndex, setDotIndex] = useState(0); 
  const settings = {
    // nav:false,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 1500,
    // dots: true,

    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: productItems.length < 3 ? productItems.length : 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      // Update the starting dot index based on the current slide
      const newDotIndex = Math.floor(newIndex / 5) * 5;
      setDotIndex(newDotIndex);
    },
    appendDots: (dots) => (
      <div>
        <ul style={{ display: "flex", justifyContent: "center",position: "relative",top: "18px",padding:"0" }}>
          {/* Only show 5 dots at a time based on the current dotIndex */}
          {dots.slice(dotIndex, dotIndex + 5)}
        </ul>
      </div>
    ),
    
    responsive: [
    {
      breakpoint: 768, // Mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  }
  return (
    <section style={{ background: bgColor }} data-aos="fade-left">
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Slider {...settings}>
          {productItems.map((productItem) => {
            return (
              <ProductCard2
                key={productItem.id}
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default Section;
