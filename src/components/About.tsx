import React from 'react';

const About: React.FC = () => {
  return (
    <section className="mb-20" id="sobre">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/images/Stefania.jpg"
                alt="Stefânia de Carvalho"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-great-vibes mb-6">Sobre Stefânia de Carvalho</h2>
            <h3 className="text-xl text-pink-600 font-semibold mb-4">Maquiadora Profissional</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Com 18 anos de experiência, <span className="font-great-vibes text-xl">Stefânia de Carvalho</span> é especialista em maquiagem para noivas e maquiagem blindada, garantindo beleza impecável e duradoura. Reconhecida por realçar a beleza natural com técnicas exclusivas, ela transforma momentos especiais em memórias inesquecíveis.
              </p>
              <p>
                Seu trabalho vai além da maquiagem: é feito com sensibilidade, dedicação e produtos de alta qualidade, perfeito para noivas, formandas e qualquer ocasião marcante.
              </p>
              <p className="text-lg font-semibold text-pink-600 italic">
                "Beleza que inspira, confiança que encanta."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 