import React from "react";
import jsimg from "public/js.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          fill
          src={jsimg}
          style={{ objectFit: "cover" }}
          alt="Picture of the author"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      <div className="flex items-center justify-center pt-24">
        <h1 className="font-bold text-4xl">JS course</h1>
      </div>
    </div>
  );
};

export default Hero;
