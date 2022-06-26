import React from "react";

import { IgniteLogo } from "./IgniteLogo";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center w-full py-5 bg-gray-700 border-b border-gray-600">
      <a href="/" className="hover:cursor-pointer">
        <IgniteLogo />
      </a>
    </header>
  );
};

export default Header;
