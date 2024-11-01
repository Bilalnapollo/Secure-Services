import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../Images/logo.png";
import { products } from "../../utils/products";
import SearchBar2 from "../SeachBar/SearchBar2";

const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const [filterList, setFilterList] = useState(products);
  const [isSticky, setIsSticky] = useState(false);

  const isActiveLink = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={`navbar ${isSticky ? "navbar-sticky" : ""}`}
      expanded={expand} // Ensure the expanded state is bound here
    >
      <Container className="navbar-container">
        <div className="nav-logo-container">
          <Link to="/">
            <img src={logo} alt="" width={65} />
          </Link>
          <SearchBar2 setFilterList={setFilterList} />
        </div>

        
        <div className="d-flex">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpand(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 nav-labels">
            <Nav.Item>
              <Link
                aria-label="Go to Home Page"
                className={`navbar-link ${isActiveLink("/")}`}
                to="/"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Home</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                aria-label="Go to About Page"
                className={`navbar-link ${isActiveLink("/about")}`}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">About Us</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                aria-label="Go to Shop Page"
                className={`navbar-link ${isActiveLink("/shop")}`}
                to="/shop"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Products</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                aria-label="Go to Contact Page"
                className={`navbar-link ${isActiveLink("/contact")}`}
                to="/contact"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Contact Us</span>
              </Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
