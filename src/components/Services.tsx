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
      price: 180,
      image: '/images/Social.jpg',
      alt: 'Maquiagem social profissional',
      bookingLink: 'https://wa.me/5537999174294?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20Profissional%20Social!'
    },
    { 
      name: 'Maquiagem Noiva Civil', 
      price: 200,
      image: '/images/Civil.jpg',
      alt: 'Maquiagem social profissional',
      bookingLink: 'https://wa.me/5537999174294?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20Noiva%20Civil!'
    },
    { 
      name: 'Maquiagem Blindada', 
      price: 200,
      image: '/images/Blindada.jpg',
      alt: 'Maquiagem blindada de longa duração',
      bookingLink: 'https://wa.me/5537999174294?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20Blindada!'
    },
    { 
      name: 'Maquiagem Noiva', 
      price: 400,
      image: '/images/Noiva.jpg',
      alt: 'Maquiagem completa para noivas',
      bookingLink: 'https://wa.me/5537999174294?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20maquiagem%20de%20Noiva!'
    },
          { 
        name: 'Teste Noiva', 
        price: 160,
        image: '/images/Teste.jpg',
        alt: 'Maquiagem teste para noivas',
        bookingLink: 'https://wa.me/5537999174294?text=Ol%C3%A1%2C%20Gostaria%20de%20agendar%20uma%20maquiagem%20e%20Teste%20de%20noiva!'
      }
  ];

  return (
    <section className="py-8 sm:py-12 bg-pink-50 rounded-lg mb-12 sm:mb-20" id="agendamento">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Agende seu Horário</h2>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 px-4">
          Escolha a sua maquiagem e clique no botão para agendar seu horário.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.name} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col max-w-sm mx-auto w-full">
              <div style={{ height: "450px" }} className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.name}</h3>
                </div>
                <div className="mt-4">
                  <p className="text-xl sm:text-2xl font-bold text-pink-600 mb-4">R$ {service.price},00</p>
                  <a
                    href={service.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition-colors font-semibold text-center text-sm sm:text-base"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service) => (
            <div key={service.name} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col max-w-sm mx-auto w-full">
              <div style={{ height: "450px" }} className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.name}</h3>
                  {service.name === 'Maquiagem Express' && (
                    <p className="text-sm text-gray-600 mb-2">
                      Para agendamentos exclusivos de Segunda à quinta-feira de 08:00 às 15:00. Não inclui cílios postiços.
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-xl sm:text-2xl font-bold text-pink-600 mb-4">R$ {service.price},00</p>
                  <a
                    href={service.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition-colors font-semibold text-center text-sm sm:text-base"
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