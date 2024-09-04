import { AkeyPart } from "@Presentation/components/AkeyPart";
import { Footer } from "@Presentation/components/Footer";
import { Introduction } from "@Presentation/components/Introduction";
import { Navbar } from "@Presentation/components/Navbar";
import { Resources } from "@Presentation/components/Resources";
import { WhatWeDo } from "@Presentation/components/WhatWeDo";

const HomeView = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar/>
      <Introduction/>
      <WhatWeDo/>
      <AkeyPart/>
      <Resources/>
      <Footer/>
    </div>
  );
};

export default HomeView;
