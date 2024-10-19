import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import navigationData from "../Nav.json";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative ">
      <button
        className={`text-green-500 focus:outline-none transform transition-transform duration-500 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="transition-all duration-500" />
        ) : (
          <MenuIcon className="transition-all duration-500" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 pb-10 w-full bg-muted-900 items-center flex flex-col -z-10 transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 max-h-[300px]"
            : "-translate-y-full opacity-0 max-h-0"
        }`}
        style={{
          transitionProperty: "transform, opacity, max-height",
        }}
      >
        <ul
          className={`mt-14 space-y-4 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {navigationData.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="text-sm text-white hover:text-green-500"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contactus"
          className={`mt-4 bg-green-500 hover:bg-green-600 hover:duration-300 transition-all duration-500 text-white px-4 py-2 rounded-lg text-[10px] max-w-[100px]   ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Menu;
