'use client'

import React from 'react';
import { Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

const barbers = [
  {
    name: 'Carlos López',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024h'
  },
  {
    name: 'Roberto Díaz',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024i'
  },
  {
    name: 'Marta Sánchez',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024j'
  }
];

const services = [
  {
    nombre: 'Corte de Cabello',
    descripcion: 'Corte de cabello para hombre',
    precio: '40.000'
  },
  {
    nombre: 'Afeitado de Barba',
    descripcion: 'Afeitado y arreglo de barba',
    precio: '25.000'
  },
  {
    nombre: 'Depilación Facial',
    descripcion: 'Depilación de cejas y bigote',
    precio: '15.000'
  },
  {
    nombre: 'Tratamiento Facial',
    descripcion: 'Limpieza facial profunda',
    precio: '50.000'
  }
];

const steps = [
  {
    step: 1,
    title: 'Selecciona tu Barbero',
    description: 'Elige el barbero de tu preferencia para comenzar tu reserva.'
  },
  {
    step: 2,
    title: 'Escoge el Servicio',
    description: 'Selecciona el servicio que deseas recibir.'
  },
  {
    step: 3,
    title: 'Elige la Fecha',
    description: 'Redirigido al calendario para elegir la fecha y hora disponibles.'
  }
];

const BookingSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-6">Reserva tu Cita</h2>
      <p className="text-center mb-6 px-4 sm:px-8 lg:px-16 font-bold">
        Para reservar tu cita, sigue estos sencillos pasos:
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {steps.map((step) => (
          <div key={step.step} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 min-w-[200px] max-w-[300px]">
            <div className="bg-yellow-500 text-white rounded-full p-2 mb-4">
              <span className="font-bold text-xl">{step.step}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-center text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center mb-6 px-4 sm:px-8 lg:px-16 font-bold">
        Escoge a tu barbero:
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {barbers.map((barber, index) => (
          <Dropdown key={index} placement="bottom-center">
            <DropdownTrigger>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer min-w-[200px]">
                <Avatar src={barber.avatar} alt={barber.name} size="lg" className="mb-4" isBordered color="warning" />
                <p className="font-bold text-lg text-center">{barber.name}</p>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Barber Services">
              {services.map((service, i) => (
                <DropdownItem key={i} className="p-4 hover:bg-gray-200 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">{service.nombre}</span>
                    <span className="text-sm text-gray-600">{service.descripcion}</span>
                    <span className="font-bold text-gray-800 mt-1">Precio: {service.precio}</span>
                  </div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
      </div>
    </div>
  );
};

export default BookingSection;
