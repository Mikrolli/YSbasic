import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarDropMobile = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex uppercase items-center gap-4">
        Услуги <IoIosArrowDown />
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
        <Menu.Items className='text-red-500 absolute mt-3 w-max bg-white'>
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm flex items-center gap-1"
                  )}
                >
                  Крупная бытовая техника
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarDropMobile;
