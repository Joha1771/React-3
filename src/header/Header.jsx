import React from "react";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto px-4.5 py-3.5 flex items-center justify-between max-w-300">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <nav
            id="header-navbar"
            class="justify-center hidden md:flex items- center"
          >
            <ul class="flex xl:gap-[75px] gap-[45px] items-center justify-center  xl:text-2xl text-[18px] font-medium font-ubuntu">
              <li class="cursor-pointer nav-link-hover">
                {" "}
                <a href="#films">Услуги</a>
              </li>
              <li class="cursor-pointer nav-link-hover">
                {" "}
                <a href="#TV-Series">Прайс-лист</a>
              </li>
              <li class="cursor-pointer nav-link-hover">
                <a href="#Channels"> О компании</a>
              </li>
              <li class="cursor-pointer nav-link-hover">
                <a href="#Music">Контакты </a>
              </li>
              <li class="cursor-pointer nav-link-hover">
                <a href="#Music">+7 499 226 29 28 </a>
              </li>
            </ul>
          </nav>
          <div
            id="menuBtn"
            class="menu md:hidden flex flex-col gap-[4px] justify-end cursor-pointer z-50"
          >
            <span class="line1 w-[39px] h-[5px] bg-black rounded-full"></span>
            <span class="line2 w-[27px] h-[5px] bg-black rounded-full self-end"></span>
            <span class="line3 w-[19px] h-[5px] bg-black rounded-full self-end"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
