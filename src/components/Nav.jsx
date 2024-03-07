import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
    console.log("click");
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full  bg-purple-300">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="nike logo in orange color"
            width={130}
            height={29}
          />
        </a>

        <ul className="flex flex-row justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.label}
                className="font-montserrat leading-normal text-lg text-slate-grey"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block relative">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleNav}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
