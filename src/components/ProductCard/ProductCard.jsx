import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "923009403453"; // Your WhatsApp number
    // const message = `Hello, I would like to order the product: ${productItem.productName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    // window.location.href = whatsappUrl; 
    window.open(whatsappUrl, '_blank');
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop" onClick={() => handelClick()} data-aos="fade-left">
      {/* {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null} */}
      <div className="product-img">
        <img
          loading="lazy"
          // onClick={() => handelClick()}
          src={productItem.imgUrl}
          alt=""
        />
      </div>
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3>{productItem.category}</h3>
        <h2 onClick={() => handelClick()}>{productItem.productName}</h2>

        {/* <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div> */}
        {/* <div className="price">
          <h4>${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div> */}
        {/* <div className="order-btn">
          <button onClick={handleWhatsAppRedirect}>Order Now</button>
        </div> */}
      </div>
    </Col>
  );
};

export default ProductCard;
