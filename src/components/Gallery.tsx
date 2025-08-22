import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence, PanInfo, useAnimation } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [images, setImages] = React.useState<GalleryImage[]>([]);
  const [direction, setDirection] = React.useState(0); // 1 para frente, -1 para trás
  const swipeControls = useAnimation();
  
  // Threshold para detectar um swipe (em pixels)
  const SWIPE_THRESHOLD = 50;
  // Referência para o contêiner da imagem
  const imageContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Define as imagens da pasta public/gallery
    setImages([
      { src: '/gallery/Maquiadora profissional Piumhi (1).jpg', alt: 'Maquiagem profissional 1' },
      { src: '/gallery/Maquiadora profissional Piumhi (2).jpg', alt: 'Maquiagem profissional 2' },
      { src: '/gallery/Maquiadora profissional Piumhi (3).jpg', alt: 'Maquiagem profissional 3' },
      { src: '/gallery/Maquiadora profissional Piumhi (4).jpg', alt: 'Maquiagem profissional 4' },
      { src: '/gallery/Maquiadora profissional Piumhi (5).jpg', alt: 'Maquiagem profissional 5' },
      { src: '/gallery/Maquiadora profissional Piumhi (6).jpg', alt: 'Maquiagem profissional 6' },
      { src: '/gallery/Maquiadora profissional Piumhi (7).jpg', alt: 'Maquiagem profissional 7' },
      { src: '/gallery/Maquiadora profissional Piumhi (8).jpg', alt: 'Maquiagem profissional 8' },
      { src: '/gallery/Maquiadora profissional Piumhi (9).jpg', alt: 'Maquiagem profissional 9' },
      { src: '/gallery/Maquiadora profissional Piumhi (10).jpg', alt: 'Maquiagem profissional 10' },
      { src: '/gallery/Maquiadora profissional Piumhi (11).jpg', alt: 'Maquiagem profissional 11' },
      { src: '/gallery/Maquiadora profissional Piumhi (12).jpg', alt: 'Maquiagem profissional 12' },
      { src: '/gallery/Maquiadora profissional Piumhi (13).jpg', alt: 'Maquiagem profissional 13' },
      { src: '/gallery/Maquiadora profissional Piumhi (14).jpg', alt: 'Maquiagem profissional 14' },
      { src: '/gallery/Maquiadora profissional Piumhi (15).jpg', alt: 'Maquiagem profissional 15' },
      { src: '/gallery/Maquiadora profissional Piumhi (16).jpg', alt: 'Maquiagem profissional 16' },
      { src: '/gallery/Maquiadora profissional Piumhi (17).jpg', alt: 'Maquiagem profissional 17' },
      { src: '/gallery/Maquiadora profissional Piumhi (18).jpg', alt: 'Maquiagem profissional 18' },
      { src: '/gallery/Maquiadora profissional Piumhi (19).jpg', alt: 'Maquiagem profissional 19' },
      { src: '/gallery/Maquiadora profissional Piumhi (20).jpg', alt: 'Maquiagem profissional 20' },
      { src: '/gallery/Maquiadora profissional Piumhi (21).jpg', alt: 'Maquiagem profissional 21' },
      { src: '/gallery/Maquiadora profissional Piumhi (22).jpg', alt: 'Maquiagem profissional 22' },
      { src: '/gallery/Maquiadora profissional Piumhi (23).jpg', alt: 'Maquiagem profissional 23' },
      { src: '/gallery/Maquiadora profissional Piumhi (24).jpg', alt: 'Maquiagem profissional 24' },
      { src: '/gallery/Maquiadora profissional Piumhi (25).jpg', alt: 'Maquiagem profissional 25' },
      { src: '/gallery/Maquiadora profissional Piumhi (26).jpg', alt: 'Maquiagem profissional 26' },
      { src: '/gallery/Maquiadora profissional Piumhi (27).jpg', alt: 'Maquiagem profissional 27' },
      { src: '/gallery/Maquiadora profissional Piumhi (28).jpg', alt: 'Maquiagem profissional 28' },
      { src: '/gallery/Maquiadora profissional Piumhi (29).jpg', alt: 'Maquiagem profissional 29' },
      { src: '/gallery/Maquiadora profissional Piumhi (30).jpg', alt: 'Maquiagem profissional 30' }
    ]);
  }, []);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    
    setDirection(1);
    setSelectedIndex((prev: number | null) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    
    setDirection(-1);
    setSelectedIndex((prev: number | null) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  // Handler para quando o usuário desliza o dedo na tela
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    
    // Se o swipe for rápido o suficiente ou a distância for suficiente
    if (Math.abs(offset.x) > SWIPE_THRESHOLD || Math.abs(velocity.x) > 0.3) {
      if (offset.x < 0) {
        // Swipe para a esquerda - próxima imagem
        handleNext();
      } else {
        // Swipe para a direita - imagem anterior
        handlePrevious();
      }
    } else {
      // Se o swipe não for suficiente, volta a imagem para a posição central
      swipeControls.start({ x: 0 });
    }
  };

  const handleKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        setDirection(-1);
        setSelectedIndex((prev: number | null) => {
          if (prev === null) return null;
          return prev === 0 ? images.length - 1 : prev - 1;
        });
        break;
      case 'ArrowRight':
        setDirection(1);
        setSelectedIndex((prev: number | null) => {
          if (prev === null) return null;
          return prev === images.length - 1 ? 0 : prev + 1;
        });
        break;
      case 'Escape':
        setSelectedIndex(null);
        break;
      default:
        break;
    }
  }, [selectedIndex, images.length]);

  React.useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      
      // Desabilitar o scroll da página quando o modal estiver aberto
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, handleKeyDown]);

  // Variantes de animação para o modal
  const modalVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Variantes de animação para as imagens
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Efeito de hover para os thumbnails
  const thumbnailHoverVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12" id="galeria">
      <h2 className="text-3xl font-bold text-center mb-8">Galeria de Trabalhos</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.slice(0, 4).map((image: GalleryImage, index: number) => {
          const isLastVisible = index === 3 && images.length > 4;
          
          return (
            <motion.div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow w-full max-w-[400px] mx-auto"
              onClick={() => isLastVisible ? setSelectedIndex(0) : setSelectedIndex(index)}
              whileHover="hover"
              variants={thumbnailHoverVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {isLastVisible && (
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white">
                  <p className="text-xl font-semibold mb-2">Ver Galeria</p>
                  <p className="text-xs opacity-75">+{images.length - 3} fotos</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Modal para visualização de imagem em tamanho grande com navegação */}
      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <motion.div 
            key="modal"
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={handleClose}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {/* Botão Fechar */}
            <motion.button
              className="absolute top-8 right-8 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors z-50"
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div 
              ref={imageContainerRef}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={selectedIndex}
                  className="touch-none" // Impede comportamentos de toque padrão
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  animate={swipeControls}
                >
                  <motion.img
                    src={images[selectedIndex].src}
                    alt={images[selectedIndex].alt}
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg transform scale-150"
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    draggable="false" // Desativa o comportamento padrão de arrastar imagens
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Dicas de swipe para dispositivos móveis */}
              <motion.div 
                className="absolute inset-x-0 top-0 flex justify-center items-center px-4 py-2 md:hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-white/60 text-xs backdrop-blur-sm bg-black/20 px-2 py-1 rounded-md">
                  Deslize para navegar entre as imagens
                </div>
              </motion.div>
              
              {/* Botões de navegação */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 flex justify-between items-center px-4 py-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white/80 text-sm backdrop-blur-sm bg-black/20 px-2 py-1 rounded-md">
                  {selectedIndex + 1} de {images.length}
                </div>
              </motion.div>
              
              {/* Botão Anterior */}
              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={handlePrevious}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>
              
              {/* Botão Próximo */}
              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={handleNext}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;