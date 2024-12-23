import React, { useState } from "react";
import Section from "../Section";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import cctv from "../../Images/cctv.png";
import wifi from "../../Images/wifi.png";
import fire from "../../Images/fire.png";
import controll from "../../Images/controll.png";
import phones from "../../Images/product76.png";
import attendence from "../../Images/product79.png";
import counter from "../../Images/product85.png";
import matel from "../../Images/product87.png";
import router from "../../Images/product94.png";
import printer from "../../Images/product95.png";
import drive from "../../Images/product96.png";
import wireless from "../../Images/wireless.png";
import tel from "../../Images/product112.png";
import solar from "../../Images/product122.png";
import "./categories.css";

const ProductCategories = ({ products }) => {
    const navigate = useNavigate();
    const categories = [...new Set(products.map((item) => item.category))];


    const categoryImages = {
        "CCTV Camera": cctv,
        "Wifi Camera": wifi,
        "Solar Camera": solar,
        "Fire & Safety": fire,
        "Access Control": controll,
        "Door Phone Audio Video": phones,
        "Attendance Machine": attendence,
        "Cash Counter Machine": counter,
        "Matel Detecter": matel,
        "Signal Router": router,
        "Printer": printer,
        "External Hard Drive": drive,
        "Wireless Set & Accessories": wireless,
        "Telephone Exchange": tel,
        // Add more categories and corresponding images
      };
    
  return (
    <>
      <section data-aos="fade-right">
      <Container>
      <div  className="heading">
          <h1>Explore Our Categories of Security Services</h1>
        </div>
      {/* <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => navigate(`/category/${category}`)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              backgroundColor: "#f6f9fc",
              border: "none",
              cursor: "pointer",
            }}
          >
            {category}
          </button>
        ))}
      </div> */}
      <div className="cat-container">
      {
        categories.map((category)=>{
            return(
            <>
                <div className="cat-card" onClick={() => navigate(`/category/${category}`)}>
                    <div className="cat-card-header">
                        <img src={categoryImages[category]} alt="" style={{width:"100%",objectFit:"contain", maxHeight: "220px"}} />
                    </div>
                    <div className="cat-card-bottom">
                        <h2>{category}</h2>
                    </div>
                </div>
            </>
            )
        })
      }
       
       
        
        
        
        
      </div>
      </Container>
    </section>
    </>
  )
}

export default ProductCategories
