import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarDrop from "./NavbarDrop";
import NavbarSocials from "./NavbarSocials";
import NavbarDropAbout from "./NavbarDropAbout";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between items-center max-w-[1240px] text-white mx-auto px-4 h-24">
      <Link to="/" className="w-full text-3xl font-bold">
        ЯрСервис
      </Link>
      <ul className="hidden md:flex font-medium">
        <NavLink to="/" className=" hover:text-red-500 active:text-red-700 p-5">
          Главная
        </NavLink>
        <li className=" hover:text-red-500 active:text-red-700 p-5">
          <NavbarDropAbout />
        </li>
        <li className=" hover:text-red-500 active:text-red-700 p-5">
          <NavbarDrop />
        </li>
        <NavLink
          to="/price"
          className=" hover:text-red-500 active:text-red-700 p-5"
        >
          Цены
        </NavLink>
        <li className=" hover:text-red-500 active:text-red-700 p-5">
          Контакты
        </li>
      </ul>
      {/* Burger */}
      <div onClick={handleOpen} className="block md:hidden cursor-pointer">
        {open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* Mobile menu */}
      <div
        className={
          open
            ? "fixed left-0 top-0 w-[70%] h-full border-b border-r-gray-900 bg-white ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-black p-4 uppercase grid">
          <NavLink
            to="/"
            className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700"
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700"
          >
            Компания
          </NavLink>
          <NavLink
            to="/certificates"
            className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700"
          >
            Сертификаты
          </NavLink>
          <NavLink
            to="/services"
            className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700"
          >
            Услуги
          </NavLink>
          <NavLink
            to="/price"
            className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700"
          >
            Цены
          </NavLink>
          <NavLink
            to="/contact"
            className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700"
          >
            Контакты
          </NavLink>
          {/* <NavbarContacts /> */}
          <NavbarSocials />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
