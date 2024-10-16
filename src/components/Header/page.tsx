"use client";

import React from "react";
import navigationData from "./Nav.json";
import Link from "next/link";
// import Menu from "../Menu/page";

const Header = () => {
  return (
    <nav className="container flex items-center justify-between lg:px-0 px-4 py-2">
      <Link href="/">
        <div className="lg:text-4xl md:text-4xl text-3xl font-bold cursor-pointer">
          <span className="text-red">Epic</span>Kashmir
        </div>
      </Link>
      <ul className="lg:flex space-x-8 hidden">
        {navigationData.map((item, index) => (
          <li className="my-2" key={index}>
            <Link href={item.path}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <button className="bg-red-600 hover:bg-red-500 transition duration-300 text-white px-4 py-2 rounded-lg text-sm">
          Contact Us
        </button>
      </div>

      {/* <Menu /> */}
    </nav>
  );
};

export default Header;
