import React from "react";
import ServicesList from '../../mocks/ServicesList';


const Services = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1240px] mx-auto w-full px-4 py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 lg:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Услуги нашего сервиса
            </h2>
            <p className="">
              Мы гарантируем качество выполненных работ, минимальные сроки,
              реальные цены и высокий уровень сервиса.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {ServicesList.map((services) => (
              <div className="group space-y-4 border-2 p-2 rounded-md">
                <img src={services.img.imgTitle} alt='/' className="h-64 w-full object-cover object-top rounded-xl transition duration-500 group-hover:rounded-3xl" />
                <div className="space-y-2">
                  <span className="text-gray-500">{services.name}</span>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-gray-700">{services.title}</h4>
                  </div>
                </div>
                {/* <Button onClick={() => setOpenModal(true)} className='bg-blue-500 p-2 rounded-md text-white text-md'>Подробнее</Button>
                <Modal visible={openModal} setVisible={setOpenModal}>
                  <ServicesOpenModal />
                </Modal> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
