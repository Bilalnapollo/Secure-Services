import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductCard2 from "./ProductCard/ProductCard2";

const Section = ({ title, bgColor, productItems }) => {
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
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
