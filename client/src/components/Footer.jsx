import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col items-center justify-center md:items-start">
          <img
            src="/logo.png"
            className="h-16 w-16 mb-2 mx-auto"
            alt="BarberApp Logo"
          />
          <p className="font-bold text-lg">BarberApp</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} BarberApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
