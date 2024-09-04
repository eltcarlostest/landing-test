import image1 from '@Assets/Screenshot from 2024-09-03 20-02-12.png';
import image2 from '@Assets/2.png';
import image3 from '@Assets/3.png';
import image4 from '@Assets/4.png';

const keyArray = [
  {
    name: '',
    url: '',
    image: image1,
    title: 'Evolución de los centros urbanos',
    description: 'Evolución de los centros urbanos: 1960- 2023',
  },
  {
    name: '',
    url: '',
    image: image2,
    title: 'Expansión urbana',
    description: 'Expansión urbana: 1980- 2021',
  },
  {
    name: '',
    url: '',
    image: image3,
    title: 'Panamá - David',
    description: 'Mapa trazado propuestro tren Panamá - David',
  },
  {
    name: '',
    url: '',
    image: image4,
    title: 'Rio Matasnillo',
    description: 'transformaciones urbanas en el siglo XX',
  },
];

export const AkeyPart = () => {
  return (
    <div className="m-10">
      <div>
        <div className="flex w-full h-2 bg-black mb-4" />
        <p className="text-5xl font-bold  leading-[60px]">
          Una parte clave de nuestra teoría del cambio implica forjar alianzas
          de confianza con gobiernos, empresas, organizaciones de investigación,
          grupos de la sociedad civil y otros para reunir a los agentes de
          cambio adecuados. Obtenga más información sobre los más de 100
          proyectos, coaliciones e iniciativas del WRI.
        </p>
        <div className="grid grid-cols-4 gap-x-24 pt-10">
          {keyArray.map((item, index) => (
            <div key={index} className="relative h-[450px] w-[400px]">
              <img src={item.image} alt="imagen" />
              <div className="absolute bottom-2 bg-white p-4 w-[350px]">
                <div className="flex flex-col gap-y-2 text-start">
                  <h1 className="font-bold text-3xl">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <div className="flex flex-row gap-x-4 pt-4">
                  <div className="bg-orange-400 px-6 py-3 text-sm rounded-sm font-bold hover:bg-orange-300 transition-all duration-500">
                    Lanzar Plataforma
                  </div>
                  <div className="px-6 py-3 text-sm border-orange-400 border-2 rounded-sm cursor-pointer hover:bg-slate-100 transition-all duration-100">
                    Visitar
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div className="w-full h-[.2px] bg-slate-200" />
        <div className="bg-orange-400 w-52 text-center px-6 py-3 text-sm rounded-sm font-bold hover:bg-orange-300 transition-all duration-500">
          Lanzar Plataforma
        </div>
      </div>
    </div>
  );
};
