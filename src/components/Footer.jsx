import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Dr. João Silva</h3>
            <p className="mt-2">CRM: 123456</p>
          </div>
          
          <div className="flex space-x-4">
            <FaFacebook size={24} className="cursor-pointer hover:text-secondary" />
            <FaInstagram size={24} className="cursor-pointer hover:text-secondary" />
            <FaLinkedin size={24} className="cursor-pointer hover:text-secondary" />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p>&copy; 2023 Dr. João Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
