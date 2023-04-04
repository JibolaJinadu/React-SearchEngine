import React from "react";
import NavBar from "./NavBar";
import apps_img from "./apps_img.png";
import Jay from "./Jay.jpg";

const HeaderComp = () => {
  return (
    <div className="navbar">
      <div className="navcontent">
        <NavBar link={"Gmail"} />
        <NavBar link={"Images"} />
        <img src={apps_img} alt="app_launcher" className="appImg" />
        <img src={Jay} alt="app_launcher" className="appImg2" />
      </div>
    </div>
  );
};

export default HeaderComp;
