import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-12" id="sobre">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/Stefania.jpg"
              alt="Stefânia Carvalho"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              Olá! Sou Stefânia Carvalho, maquiadora profissional apaixonada por realçar a beleza única de cada pessoa.
              Com anos de experiência no mercado de beleza, especializo-me em maquiagens para noivas, eventos sociais
              e produções especiais.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Minha jornada na maquiagem começou com uma paixão por transformar e valorizar a beleza natural de cada
              cliente. Hoje, tenho o privilégio de fazer parte de momentos especiais, criando looks personalizados
              que destacam a beleza individual de cada pessoa.
            </p>
            <p className="text-lg text-gray-700">
              Trabalho com produtos de alta qualidade e técnicas modernas para garantir um resultado duradouro e
              impecável. Meu objetivo é fazer você se sentir confiante e deslumbrante em qualquer ocasião.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;