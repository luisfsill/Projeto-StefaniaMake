import React from 'react';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="mt-20 text-center" id="contato">
      <h2 className="text-3xl font-bold mb-8">Contato</h2>
      <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
        <a 
          href="tel:37999174294"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors w-12 h-12"
        >
          <Phone className="w-5 h-5" />
          <span className="sr-only">(37) 99917-4294</span>
        </a>
        <a 
          href="mailto:stefanyamakke@gmail.com"
          target="_blank"
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors w-12 h-12"
        >
          <Mail className="w-5 h-5" />
          <span className="sr-only">stefanyamakke@gmail.com</span>
        </a>
        <a 
          href="https://www.instagram.com/stefaniamake"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors w-12 h-12"
        >
          <Instagram className="w-5 h-5" />
          <span className="sr-only">Instagram</span>
        </a>
        <a 
          href="https://wa.me/5537999174294"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors w-12 h-12"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Contact; 