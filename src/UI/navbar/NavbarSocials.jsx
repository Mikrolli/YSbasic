import React from "react";
import { FaInstagram, FaViber, FaVk, FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

const NavbarSocials = () => {
  return (
    <div className="flex justify-between my-6">
      <FaInstagram className="text-red-500" size={20} />
      <a href="https://vk.com/club71865496"><FaVk className="text-blue-500" size={20} /></a>
      <a href="viber://chat?number=%2B"><FaViber className="text-purple-500" size={20} /></a>
      <FaWhatsapp className="text-green-500" size={20} />
      <TbBrandTelegram className="text-sky-500" size={20} />
    </div>
  );
};

export default NavbarSocials;
