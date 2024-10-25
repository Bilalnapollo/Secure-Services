import { Col } from "react-bootstrap";
import "./product-card2.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard2 = ({ title, productItem }) => {
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
    <Col md={3} sm={5} xs={10} className="product2 mtop" onClick={() => handelClick()}>
      {/* {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null} */}
      <div className="product-img2">
        <img
          loading="lazy"
          // onClick={() => handelClick()}
          src={productItem.imgUrl}
          alt=""
        />
      </div>
      <div className="product-like2">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details2">
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

export default ProductCard2;
