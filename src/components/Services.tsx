import React from 'react';
import { Sparkles } from 'lucide-react';

interface Service {
  name: string;
  price: number;
  image: string;
  alt: string;
  bookingLink: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    { 
      name: 'Maquiagem Profissional Social', 
      price: 160,
      image: '/images/Social.jpg',
      alt: 'Maquiagem social profissional',
      bookingLink: 'https://calendly.com/stephanyamakke/social'
    },
    { 
      name: 'Maquiagem Noiva Civil', 
      price: 180,
      image: '/images/Civil.jpg',
      alt: 'Maquiagem social profissional',
      bookingLink: 'https://calendly.com/stephanyamakke/civil'
    },
    { 
      name: 'Maquiagem Blindada', 
      price: 180,
      image: '/images/Blindada.jpg',
      alt: 'Maquiagem blindada de longa duração',
      bookingLink: 'https://calendly.com/stephanyamakke/blindada'
    },
    { 
      name: 'Maquiagem Noiva', 
      price: 400,
      image: '/images/Noiva.jpg',
      alt: 'Maquiagem completa para noivas',
      bookingLink: 'https://calendly.com/stephanyamakke/noiva'
    }
  ];

  return (
    <section className="py-12 bg-pink-50 rounded-lg mb-20" id="agendamento">
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Agende seu Horário</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Clique no botão abaixo para agendar sua maquiagem no horário mais conveniente para você.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-pink-600 mb-4">R$ {service.price},00</p>
                  <a
                    href={service.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors font-semibold text-center"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 