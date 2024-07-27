'use client'

import React, { useState } from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

export default function CardComponent() {
  const [showCards, setShowCards] = useState(false);

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

  const renderServices = () => {
    return services.map((service, index) => (
      <div key={index} className={`max-w-[370px] sm:w-1/2 lg:w-1/4 p-4 transition-transform duration-500 ${showCards ? "transform translate-y-0 opacity-100" : "transform -translate-y-10 opacity-0"}`}>
        <Card className="bg-black text-white shadow-lg rounded-lg border-t border-[#f59e0b] min-w-[240px]">
          <CardHeader className="bg-[#ffffff] rounded-t-lg p-4">
            <p className="font-bold text-lg text-black">{service.nombre}</p>
          </CardHeader>
          <CardBody className="p-4">
            <p className="text-gray-300">{service.descripcion}</p>
            <p className="mt-2 font-bold text-lg text-[#ffcc40]">Precio: {service.precio}</p>
          </CardBody>
        </Card>
      </div>
    ));
  };

  return (
    <div className="text-center my-4">
      <div className="bg-[#000] p-4 rounded-lg shadow-md mb-8 max-w-[90%] mx-auto">
        <blockquote className="text-white text-lg italic font-semibold">
          "La mejor experiencia en servicios de barbería que he tenido. Profesionales y atentos a cada detalle. ¡Altamente recomendados!"
        </blockquote>
      </div>
      <Button
        className="px-4 py-2 bg-[#f59e0b] text-[#ffffff] hover:bg-[#f0bf3a] font-bold rounded-lg mb-4 transition-colors duration-300"
        onClick={() => setShowCards(!showCards)}
      >
        {showCards ? "Ocultar Servicios" : "Mostrar Servicios"}
      </Button>
      <div className={`flex flex-wrap justify-center gap-4 transition-all duration-500 ${showCards ? "max-h-full" : "max-h-0 overflow-hidden"}`}>
        {renderServices()}
      </div>
    </div>
  );
}