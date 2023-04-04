import React from "react";

const NavBar = ({ link }) => {
  return (
    <div>
      <a className="link" href="https://www.google.com">
        {link}
      </a>
    </div>
  );
};

export default NavBar;
