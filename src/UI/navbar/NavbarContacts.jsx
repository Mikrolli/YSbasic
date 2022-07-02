import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const NavbarContacts = () => {
  return (
    <div className="my-6">
            <ul className="">
              <li className="py-2 text-sm flex items-center gap-2">
                <BsTelephone />
                <a href="tel:+79109739646">283-300</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <BsTelephone />
                <a href="tel:+79109739646">283-300</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <BsTelephone />
                <a href="tel:+79109739646">283-300</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <MdAlternateEmail />
                <a href="">remont@yar-servise.ru</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <MdAlternateEmail />
                <a href="">manager-zip@yar-servise.ru</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <BiMap />
                г. Ярославль, Ленинградский пр-т, 52в
              </li>
            </ul>
          </div>
  )
}

export default NavbarContacts