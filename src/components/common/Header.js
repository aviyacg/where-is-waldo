import React from "react";
import Logo from "./Logo";
function Header() {
  return (
    <div className="bg-white shadow flex justify-center sticky top-0">
      <Logo />
    </div>
  );
}

export default Header;
