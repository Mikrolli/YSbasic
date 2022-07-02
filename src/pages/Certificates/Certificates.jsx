import React from 'react';
import CertificatesList from '../../mocks/CertificatesList';

const Certificates = () => {
  return (
    <div className="bg-white w-full mx-auto py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center py-2">
          Наши сертификаты
        </h1>
        <div className="grid lg:grid-cols-3 gap-y-10 sm:grid-cols-2 gap-x-6 py-5">
          {CertificatesList.map((certificate) => (
            <a key={certificate.id} className="group border-2 rounded-lg p-2">
              <div className="w-full  rounded-lg overflow-hidden">
                <img
                  src={certificate.img}
                  alt={certificate.imgAlt}
                  className="w-full h-full object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                {certificate.title}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {certificate.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates