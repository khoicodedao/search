"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import { Modal, Drawer } from "antd";
import Link from "next/link";
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className="bg-blue-700 border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0">
      <Drawer
        title="Menu"
        width={"80%"}
        placement="left"
        onClose={onClose}
        open={open}
      >
        <Link className="block mb-1" href="/">
          HOME
        </Link>
        <Link className="block mb-1" href="/support">
          SUPPORT
        </Link>
        <Link className="block mb-1" href="/setting">
          SETTING
        </Link>
      </Drawer>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          onClick={() => {
            showDrawer();
          }}
          className="flex items-center"
        >
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
