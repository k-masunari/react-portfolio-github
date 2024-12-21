import React from "react";
import Icon from "../logo.svg";

const Header = () => {
  return (
    <header className="bg-dark text-white py-2 w-100">
      <div className="d-flex align-items-center justify-content-start">
        <img className="logo ms-4" src={Icon} alt="" />
        <div className="text-white fw-bold">KENGO MASUNARI</div>
      </div>
    </header>
  );
};
export default Header;
