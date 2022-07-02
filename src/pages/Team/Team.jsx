import React from 'react';
import TeamList from '../../mocks/TeamList';

const Team = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-[1240px] mx-auto w-full px-4 py-16'>
        <div className='container m-auto px-6 text-gray-600 md:px-12 lg:px-6'>
          <div className='mb-12 space-y-2 text-center'>
            <h2 className='text-2xl text-gray-600 font-bold md:text-4xl'>Наша дружная команда</h2>
            <p className='lg:w-6/12 lg:mx-auto'>Дружный коллектив — залог успешной работы</p>
          </div>
          <div className='grid gap-12 lg:grid-cols-2'>
            {TeamList.map((team) => (
              <div key={team.id} className='p-1 rounded-xl group sm:flex space-x-6 bg-blue-100 bg-opacity-50 shadow-xl hover:rounded-2xl'>
                <img src={team.img} alt="/" className='h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl' />
                <div className='sm:w-7/12 pl-0 p-5'>
                  <div className='space-y-2'>
                    <div className='space-y-4'>
                      <h4 className='text-2xl font-semibold text-gray-400'>{team.name}</h4>
                      <p className='text-gray-500'>{team.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team