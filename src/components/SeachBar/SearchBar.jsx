import { useState } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";
import Autosuggest from "react-autosuggest";

const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState(""); // Initialize as empty string
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    return inputValue
      ? products.filter((item) =>
          item.productName?.toLowerCase().includes(inputValue)
        )
      : [];
  };

  const getSuggestionValue = (suggestion) => suggestion.productName;

  const renderSuggestion = (suggestion) => (
    <div>{suggestion.productName}</div>
  );

  const onSuggestionSelected = (event, { suggestion }) => {
    setSearchWord(suggestion.productName);
    setFilterList(
      products.filter((item) =>
        item.productName?.toLowerCase().includes(suggestion.productName.toLowerCase())
      )
    );
  };

  const onChange = (event, { newValue }) => {
    setSearchWord(newValue);
    setFilterList(
      products.filter((item) =>
        item.productName?.toLowerCase().includes(newValue.toLowerCase())
      )
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Search...",
    value: searchWord,
    onChange: onChange,
  };

  return (
    <div className={`search-container ${suggestions.length > 0 ? "with-suggestions" : ""}`}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
