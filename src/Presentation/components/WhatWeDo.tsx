import imageCity from '@Assets/children-biking-calle-colombia.jpeg';
import { ArrowRight } from 'lucide-react';

const city = [
  {
    name: 'Rios y Oceanos',
    link: '',
    img: imageCity,
  },
  {
    name: 'Rios y Oceanos',
    link: '',
    img: imageCity,
  },
  {
    name: 'Espacio urbano',
    link: '',
    img: imageCity,
  },
  {
    name: 'Rios y Oceanos',
    link: '',
    img: imageCity,
  },
  {
    name: 'Espacio urbano',
    link: '',
    img: imageCity,
  },
  {
    name: 'Rios y Oceanos',
    link: '',
    img: imageCity,
  },
  {
    name: 'Espacio urbano',
    link: '',
    img: imageCity,
  },
  {
    name: 'Rios y Oceanos',
    link: '',
    img: imageCity,
  },
];

export const WhatWeDo = () => {
  return (
    <div className="my-20 grid grid-cols-[20%_80%] gap-x-10 mx-20">
      <div className="flex flex-col gap-y-2">
        <div className="flex w-full h-2 bg-black" />
        <h1 className="text-start font-bold text-3xl">Que nosotros hacemos?</h1>
      </div>
      <div>
        <div className="flex flex-col">
          <p className="leading-tight text-3xl font-light">
            WRI es un socio confiable para el cambio. Utilizando enfoques
            basados ​​en la investigación, trabajamos a nivel mundial y en
            países específicos para satisfacer las necesidades esenciales de las
            personas, proteger y restaurar la naturaleza, estabilizar el clima y
            construir comunidades más resilientes. Nuestro objetivo es
            transformar fundamentalmente la forma en que el mundo produce
            alimentos, utiliza la energía y diseña sus ciudades para crear un
            futuro mejor para todos. Trabajamos en varios temas que afectan a
            las personas, la naturaleza y el clima:
          </p>
          <div className="grid grid-cols-4 gap-10 mt-10">
            {city.map((item, index) => (
              <div key={index} className="relative">
                <img src={item.img} className="w-full" />
                <div className="absolute top-0 left-0 bg-white px-2 py-2 w-32 hover:cursor-pointer hover:w-40 hover:py-4 transition-all duration-100 ">
                  <span className="flex flex-row items-center justify-between text-2xl font-bold">
                    {item.name} <ArrowRight className="text-orange-400" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
