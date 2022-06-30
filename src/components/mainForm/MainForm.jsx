import React from "react";

const MainForm = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Закажите звонок прямо сейчас!
          </h1>
          <p>Мы свяжемся с вами в ближайшее время.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Введите ваш Email"
            />
            <button className="bg-[#FF0000] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3">
              Отправить
            </button>
          </div>
          <p>
            Обращаем Ваше внимание, в целях контроля качества обслуживания{" "}
            <span className="text-[#FF0000]">все разговоры записываются</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
