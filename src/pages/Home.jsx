import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import ContactForm from "../components/Contact/ContactForm";
import ProductCategories from "../components/ProductCategories/ProductCategories";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  // const bestSales = products.filter((item) => item.category === "CCTV Camera");

  const uniqueCategories = Array.from(new Set(products.map((item) => item.category)));

  // Select one or two products from each unique category
  const bestSales = uniqueCategories.flatMap((category) => 
    products.filter((item) => item.category === category).slice(0, 1)
  );
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      {/* <Wrapper /> */}
      {/* <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      /> */}

      {/* <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      /> */}

      <ProductCategories products={products} />


      <Section title="Discover Our Exclusive Products" bgColor="#f6f9fc" productItems={bestSales} />

      {/* <ProductCategories products={products} /> */}

      {/* <ContactForm heading="Contact Us" /> */}
      

    </Fragment>
  );
};

export default Home;
