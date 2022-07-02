import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown, IoIosMedal } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarDropAbout = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-1">
        Компания <IoIosArrowDown />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-3 w-max rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/about"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-6 py-2 text-lg uppercase font-medium"
                  )}
                >
                  Наш сервис
                </NavLink>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/certificates"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm flex items-center gap-1"
                  )}
                >
                  <GrCertificate />
                  Сертификаты
                </NavLink>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/news"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm flex items-center gap-1"
                  )}
                >
                  <IoIosMedal />
                  Новости
                </NavLink>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/team"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm flex items-center gap-1"
                  )}
                >
                  <AiOutlineTeam />
                  Наша команда
                </NavLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarDropAbout;
