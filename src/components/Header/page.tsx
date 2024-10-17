"use client";

import React from "react";
import navigationData from "./Nav.json";
import Link from "next/link";
// import Menu from "../Menu/page";

const Header = () => {
  return (
    <nav className="max-w-[1300px] bg-muted-900 fixed top-0 left-0 right-0 z-10 mx-auto px-10 py-2 rounded-full text-white">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="lg:text-4xl md:text-4xl text-3xl font-bold cursor-pointer">
            <span className="text-green-600">Snow</span>veil
          </div>
        </Link>
        <ul className="lg:flex space-x-8 hidden">
          {navigationData.map((item, index) => (
            <li className="my-2 hover:text-green-600" key={index}>
              <Link href={item.path}>
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <button className="bg-green-600 hover:bg-green-700 transition duration-300 text-white px-4 py-2 rounded-full text-sm font-bold">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
