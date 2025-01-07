import React from 'react';
import { FaHeartbeat, FaStethoscope, FaNotesMedical, FaUserMd } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHeartbeat size={50} />,
      title: "Check-up Completo",
      description: "Avaliação completa do seu estado de saúde"
    },
    {
      id: 2,
      icon: <FaStethoscope size={50} />,
      title: "Consultas de Rotina",
      description: "Acompanhamento regular da sua saúde"
    },
    {
      id: 3,
      icon: <FaNotesMedical size={50} />,
      title: "Exames Clínicos",
      description: "Diversos exames para diagnóstico preciso"
    },
    {
      id: 4,
      icon: <FaUserMd size={50} />,
      title: "Telemedicina",
      description: "Consultas online quando necessário"
    }
  ];

  return (
    <div name="serviços" className="w-full bg-gray-100 py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary">Serviços</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-12 sm:px-0 mt-12">
          {services.map(({ id, icon, title, description }) => (
            <div key={id} className="shadow-md bg-white p-6 rounded-lg hover:scale-105 duration-500">
              <div className="text-primary mb-4">{icon}</div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
