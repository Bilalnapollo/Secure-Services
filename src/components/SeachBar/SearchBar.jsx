import { useState } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";
// import useDebounce from "../../hooks/useDebounce";
const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState(null);
  // const debounceSearchWord = useDebounce(searchWord, 300);
  const handelChange = (input) => {
    const query = input.target.value.toLowerCase(); // Use the current input value directly
    setSearchWord(query);
    
    setFilterList(
      products.filter((item) =>
        item.productName?.toLowerCase().includes(query)
      )
    );
  };
  return (
    <div className="search-container">
      <input type="text" placeholder="Search Article..." onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
