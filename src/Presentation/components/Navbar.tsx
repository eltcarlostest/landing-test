import { AlignJustify, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex fixed z-50 flex-row w-full justify-between px-10 py-4 transition-all duration-300 ${
        navbarBg && 'bg-white shadow-lg' 
      }`}
    >
      <div className="pl-20">
        <ul className="flex flex-row gap-x-10 font-bold font-mono">
          <li>URBAN </li>
          <li>CIENCIA CIUDADANA</li>
          <li>CAMBIO CLIMÁTICO</li>
          <li>RIESGO Y RESILENCIA</li>
          <li>RÍOS Y OCÉANOS</li>
          <li>ESPACIO URBANO</li>
        </ul>
      </div>
      <div className={ `text-white flex flex-row gap-x-5 ${navbarBg && 'text-black'}`}>
        <Search />
        <AlignJustify />
      </div>
    </div>
  );
};
