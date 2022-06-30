import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram, FaViber, FaVk, FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import NavbarDrop from "./NavbarDrop";
import NavbarDropMobile from "./NavbarDropMobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between items-center max-w-[1240px] text-white mx-auto px-4 h-24">
      <Link to='/' className="w-full text-3xl font-bold">ЯрСервис</Link>
      <ul className="hidden md:flex">
        <NavLink to='/' className=" hover:text-red-500 active:text-red-700 p-5">Главная</NavLink>
        <NavLink to='/about' className=" hover:text-red-500 active:text-red-700 p-5">
          Компания
        </NavLink>
        <NavLink to='/certificates' className=" hover:text-red-500 active:text-red-700 p-5">
          Сертификаты
        </NavLink>
        <li className=" hover:text-red-500 active:text-red-700 p-5">
          <NavbarDrop />
        </li>
        <li className=" hover:text-red-500 active:text-red-700 p-5">Цены</li>
        <li className=" hover:text-red-500 active:text-red-700 p-5">
          Контакты
        </li>
      </ul>
        {/* Burger */}
        <div onClick={handleOpen} className="block md:hidden">
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
          <ul className="text-black p-4 uppercase">
            <li className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700">
              Главная
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700">
              Компания
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700">
              Сертификаты
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700">
              <NavbarDropMobile />
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700">
              Цены
            </li>
            <li className="p-4 border-b border-gray-600 hover:text-red-500 active:text-red-700">
              Контакты
            </li>
            <div className="grid gap-2 my-4">
              <a href="tel:+79014860602" className="flex items-center gap-2">
                <BsTelephone />
                284-400
              </a>
              <a href="tel:+79014860602" className="flex items-center gap-2">
                <BsTelephone />
                283-300
              </a>
              <a href="tel:+79014860602" className="flex items-center gap-2">
                <BsTelephone />
                900-242
              </a>
            </div>
            <div className="flex justify-between my-6">
              <FaInstagram className="text-red-500" size={20} />
              <FaVk className="text-blue-500" size={20} />
              <FaViber className="text-purple-500" size={20} />
              <FaWhatsapp className="text-green-500" size={20} />
              <TbBrandTelegram className="text-sky-500" size={20} />
            </div>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
