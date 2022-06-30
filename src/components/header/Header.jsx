import React from 'react';
import { BiMap } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='bg-gray-300'>
      <div className='text-gray-600 max-w-[1240px] mx-auto w-full flex items-center justify-between px-4'>
        <h1>Сервис ремонта бытовой техники</h1>
        <div className='flex items-center gap-1'>
          <BiMap />
          <span>г. Ярославль, Ленинградский пр-т, 52в</span>
        </div>
      </div>
    </div>
  )
}

export default Header