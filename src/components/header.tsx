import React from "react";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <nav className="bg-blue-700 border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <MenuOutlined className="text-white text-xl mr-2" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
            Quân đội và pháp luật
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
