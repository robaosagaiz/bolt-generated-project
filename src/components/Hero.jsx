import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 gap-8">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Cuidando da sua saúde com excelência
          </h2>
          <p className="text-white py-4 max-w-md">
            Atendimento humanizado e personalizado para garantir seu bem-estar.
            Mais de 15 anos de experiência em medicina geral.
          </p>
          <div>
            <Link 
              to="contato" 
              smooth 
              duration={500} 
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Agende sua consulta
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
            alt="Médico profissional"
            className="rounded-2xl mx-auto w-2/3 md:w-full object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
