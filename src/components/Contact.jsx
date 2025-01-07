import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name="contato" className="w-full bg-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary">Contato</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
            <div className="flex items-center mb-4">
              <FaPhone className="text-primary mr-4" />
              <p>(11) 99999-9999</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-primary mr-4" />
              <p>contato@drjoaosilva.com.br</p>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-primary mr-4" />
              <p>Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>

          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Nome"
              className="p-2 bg-gray-100 border-2 rounded-md focus:outline-none mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 bg-gray-100 border-2 rounded-md focus:outline-none mb-4"
            />
            <textarea
              placeholder="Mensagem"
              rows="6"
              className="p-2 bg-gray-100 border-2 rounded-md focus:outline-none mb-4"
            ></textarea>
            <button className="text-white bg-primary px-6 py-3 rounded-md hover:scale-105 duration-300">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
