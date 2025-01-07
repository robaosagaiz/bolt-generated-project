import React from 'react';

const About = () => {
  return (
    <div name="sobre" className="w-full bg-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary">Sobre</h2>
        </div>
        <p className="text-xl mt-20">
          Dr. João Silva é um médico dedicado com mais de 15 anos de experiência em medicina geral.
          Formado pela USP com especialização em clínica médica, dedica sua carreira ao atendimento
          humanizado e personalizado de seus pacientes.
        </p>
        <p className="text-xl mt-4">
          Nossa clínica oferece atendimento de qualidade com tecnologia de ponta e uma equipe
          altamente qualificada. Nosso objetivo é proporcionar o melhor cuidado possível para
          sua saúde e bem-estar.
        </p>
      </div>
    </div>
  );
};

export default About;
