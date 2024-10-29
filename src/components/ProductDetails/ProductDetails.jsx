import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import Swal from "sweetalert2";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };

  const handleWhatsAppRedirect = () => {
    Swal.fire({
      title: "Confirm Order",
      text: "Do you want to proceed with this order?",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const phoneNumber = "923009403453"; // Your WhatsApp number
        const message = `Hello, I would like to order the product\nArticle: ${selectedProduct?.productName}\nCategory: ${selectedProduct?.category}.`;
      
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
      }
    });
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center product-gap">
          <Col md={3} className="img-style">
            <img loading="lazy" src={selectedProduct?.imgUrl} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            {/* <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div> */}
            <div className="info">
              {/* <span className="price">${selectedProduct?.price}</span> */}
              <span>category: {selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            {/* <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            /> */}
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={handleWhatsAppRedirect}
            >
              Order Now
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
