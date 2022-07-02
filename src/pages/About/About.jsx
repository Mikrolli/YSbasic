import React from 'react';
import Ment from '../../assets/ment.jpg';
import Men from '../../assets/men.jpg';
import Mentr from '../../assets/mentr.jpg';
import Stol from '../../assets/stol.jpg';
import Present from '../../assets/present.jpg';

const About = () => {
  return (
    <div id="aboutt" className="w-full bg-white mx-auto py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">О компании</h1>
        <div className="text-left">
          <p className="p-2">
            Компания «Tehno» является одним из лидеров в РФ, предоставляющая
            своим клиентам широкий спектр бытовых услуг в сфере рыбатекст
            поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
            абзацев более менее осмысленного текста рыбы на русском языке с 2001
            года.
          </p>
          <p className="p-2">
            Компания «Tehno» является одним из лидеров в РФ, предоставляющая
            своим клиентам широкий спектр бытовых услуг в сфере рыбатекст
            поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
            абзацев более менее осмысленного текста рыбы на русском языке с 2001
            года.
          </p>
          <p className="p-2">
            Компания «Tehno» является одним из лидеров в РФ, предоставляющая
            своим клиентам широкий спектр бытовых услуг в сфере рыбатекст
            поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
            абзацев более менее осмысленного текста рыбы на русском языке с 2001
            года.
          </p>
          <p className="p-2">
            Компания «Tehno» является одним из лидеров в РФ, предоставляющая
            своим клиентам широкий спектр бытовых услуг в сфере рыбатекст
            поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
            абзацев более менее осмысленного текста рыбы на русском языке с 2001
            года.
          </p>
        </div>
        <div className="grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4">
          <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Ment} alt="/" />
          <img className="w-full h-full object-cover" src={Men} alt="/" />
          <img className="w-full h-full object-cover" src={Mentr} alt="/" />
          <img className="w-full h-full object-cover" src={Stol} alt="/" />
          <img className="w-full h-full object-cover" src={Present} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About