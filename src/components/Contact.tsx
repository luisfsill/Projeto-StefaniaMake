import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (37) 99917-4294',
      link: 'https://wa.me/5537999174294?text=Ol%C3%A1,%20vi%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'stephanyamakke@gmail.com',
      link: 'mailto:stephanyamakke@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Piumhi, MG',
      link: 'https://www.google.com/maps/place/Maquiadora+Piumhi+-+Stefania+Maquiagem+Noivas+e+Madrinhas/@-20.4792087,-45.9597052,21z/data=!4m9!1m2!2m1!1sR.+Ant%C3%B4nio+Soares,+167+-+Elisa+Leonel!3m5!1s0x94b413f837b37943:0x2fcd956b3e89fd76!8m2!3d-20.4792213!4d-45.9596575!16s%2Fg%2F11tfptk6sz?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@stefaniamakke',
      link: 'https://www.instagram.com/stefaniamake/'
    }
  ];

  return (
    <section className="py-12 bg-white" id="contato">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-pink-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;