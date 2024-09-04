import construction from '@Assets/info.png';
import image5 from "@Assets/5.png" 
import image6 from "@Assets/6.png"
import image7 from "@Assets/7.png"

const sources = [
  {
    category: 'Riesgo y Resiliencia',
    title: 'Tablero de indicadores para áreas críticas para la recolección de desechos en San Miguelito',
    img: image7,
  },
  {
    category: 'Riesgo y Resiliencia',
    title: 'Desastres en capitales de América Central: 1990- 2015',
    img: image6,
  },
  {
    category: 'Riesgo y Resiliencia',
    title: 'Desastres e impactos registrados por desastres naturales en ciudad de Panamá: 1990- 2015',
    img: image5,
  },
];

export const Resources = () => {
  return (
    <div className="m-10 p-10">
      <div>
        <div className="flex w-full h-2 bg-black mb-4" />
        <h1 className="font-bold text-3xl">Recursos destacados</h1>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-[70%_30%] gap-x-10">
          <div>
            <img src={construction} alt="construction" className="w-full" />
          </div>
          <div className="flex flex-col gap-y-32">
            {sources.map((source, index) => (
              <div key={index}>
                <div className="flex w-full h-[.2px] bg-black mb-2" />
                <div className="grid grid-cols-[70%_30%]">
                  <div className="flex flex-col">
                    <h3 className="text-green-800  text-xl">
                      {source.category}
                    </h3>
                    <p className="text-2xl font-thin">{source.title}</p>
                  </div>
                  <div>
                    <img src={source.img} alt="cons" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
