import React from 'react';
import { Avatar } from '@nextui-org/react';

const testimonials = [
  {
    name: 'Juan Pérez',
    text: '¡Un excelente servicio y un ambiente amigable! 100% recomendado.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    name: 'María García',
    text: 'Los mejores barberos de la ciudad. Siempre salgo satisfecho.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024e'
  },
  {
    name: 'Luis Gómez',
    text: '¡Servicio excepcional y muy profesional! Definitivamente volveré.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024f'
  },
  {
    name: 'Ana Martínez',
    text: 'Un lugar ideal para relajarse y salir con un corte perfecto.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024g'
  }
];

const Testimonials = () => {
  return (
    <div className="relative max-w-full min-h-[500px] mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('testimonial-img/1.webp')" }}>
      <div className="bg-black bg-opacity-50 backdrop-blur-md p-10 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-6">Testimonios</h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-white mb-5">Nuestros clientes nos aman. Aquí hay algunas de sus opiniones.</p>
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 animate-scroll">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] p-4">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center space-x-4 min-h-32">
                  <Avatar src={testimonial.avatar} alt={testimonial.name} size="md" />
                  <div>
                    <p className="italic text-sm sm:text-base md:text-lg">"{testimonial.text}"</p>
                    <p className="mt-2 font-bold text-xs sm:text-sm md:text-base">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
