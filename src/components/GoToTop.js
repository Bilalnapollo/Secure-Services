import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp,FaWhatsapp } from "react-icons/fa";


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp className="top-btn--icon" size="22" />
        </div>
      )}
    </Wrapper>
    <div className="global-wa">
     <a href="https://wa.me/923009403453" target="_blank">
     <FaWhatsapp className="icons" color="white" size="22" />
     </a>
    </div>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: #1c426f;
    box-shadow: 0 4px 10px #0003;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 0.8s linear infinite alternate-reverse;
    }
    &:hover{
    background-color: #0e4a93;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(0.5rem);
      }
    }
  }
  

  @media (max-width: 768px) {
    .top-btn {
      right: 5%;
      
    }
  }
`;

export default GoToTop;
