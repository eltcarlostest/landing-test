import image from '@Assets/mexico-elections-2024.jpg';

export const Introduction = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-center mx-32">
        <h1 className="text-8xl font-bold  leading-tight">
          Climate Impacts of{' '}
          <span className="text-green-800">Gloval Elections</span>
        </h1>
        <div className='grid grid-cols-2 gap-x-24'>
            <div className='flex flex-col gap-y-2'>
              <div className='flex w-full h-[.5px] bg-black'/>
              <span>Insights</span>
              <h1 className='font-bold text-2xl cursor-pointer hover:text-green-800 transition duration-100'>The Latest Data Confirms: Forest Fires Are Getting Worse</h1>
            </div>
            <div className='flex flex-col gap-y-2'>
              <div className='flex w-full h-[.5px] bg-black'/>
              <span>Insights</span>
              <h1 className='font-bold text-2xl cursor-pointer hover:text-green-800 transition duration-100'>What Are Nationally Determined Contributions (NDCs) and Why Are They Important?</h1>
            </div>
        </div>

      </div>
      <img className="w-[800px]" src={image} alt="mexico" />
    </div>
  );
};
