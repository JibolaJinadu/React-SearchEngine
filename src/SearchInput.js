import React, { useState } from "react";
import searchIcon from "./searchIcon.png";
import voiceIcon from "./voiceIcon.png";


const SearchInput = () => {
  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUpdated(message);
    }
  };

  return (
    <>
      <div className="search_container">
        <div className="search_content">
          <searcher>
            <img src={searchIcon} Alt="search Icon" />
          </searcher>
          <input
            type="text"
            className="SearchInput"
            name="message"
            placeholder=" "
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <img src={voiceIcon} Alt="voice Icon" />
        </div>
      </div>
      <h2>{updated}</h2>
      <div>
        <button className="searchbutton">Google Search</button>
        <button className="searchbutton">I'm Feeling Lucky</button>
      </div>
    </>
  );
};

export default SearchInput;
