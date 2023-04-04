import React from "react";
import Footerlink from "./SubFooterComp";

const FooterComp = () => {
  return (
    <div className="footerContainer">
      <footer className="footer">
        <div>
          <p className="location">Nigeria</p>
        </div>
        <div className="footerItems">
          <div className="footerItems1">
            <Footerlink footer={"About"} />
            <Footerlink footer={"Advertising"} />
            <Footerlink footer={"Business"} />
            <Footerlink footer={"How Search Works"} />
          </div>
          <div>
            <Footerlink footer={"Carbon neutral since 2007"} />
          </div>
          <div className="footerItems1">
            <Footerlink footer={"Privacy"} />
            <Footerlink footer={"Terms"} />
            <Footerlink footer={"Settings"} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
