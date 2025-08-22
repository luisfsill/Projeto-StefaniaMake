import * as React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Agendamento', href: '#agendamento' },
    { label: 'Contato', href: '#contato' },
  ];

      return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-pink-600 shadow-lg' : 'bg-white shadow-lg'
        }`}>
          <div className="container mx-auto px-4">
           <div className="flex items-center h-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className={`font-great-vibes text-xl md:text-2xl cursor-default transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-pink-600'
              }`}>
                Stefânia Carvalho
              </span>
            </div>

                        {/* Desktop Menu - Right side */}
            <div className="hidden md:flex items-center space-x-6 ml-auto">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`transition-colors font-medium cursor-pointer ${
                    isScrolled 
                      ? 'text-white hover:text-pink-200' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button - Right side */}
            <div className="flex items-center md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className={`transition-colors focus:outline-none ${
                isScrolled 
                  ? 'text-white hover:text-pink-200' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
         </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`block px-3 py-2 transition-colors font-medium cursor-pointer ${
                    isScrolled 
                      ? 'text-white hover:text-pink-200' 
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;