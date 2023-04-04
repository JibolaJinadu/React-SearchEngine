import React from "react";
import SearchInput from "./SearchInput";
import Searchlinks from "./Searchlinks";
import logo from "./logo.png";

const MainComp = () => {
  return (
    <>
      <mainlogo className="logo">
        <img src={logo} alt="googlelogo" />
      </mainlogo>
      <div>
        <SearchInput />
        <div className="languages">
          <span>Google offered in:</span>
          <Searchlinks languages={"Hausa"} />
          <Searchlinks languages={"Igbo"} />
          <Searchlinks languages={"Ede Yoruba"}  />
          <Searchlinks languages={"Nigerian Pidgin"}  />
        </div>
      </div>
    </>
  );
};

export default MainComp;
