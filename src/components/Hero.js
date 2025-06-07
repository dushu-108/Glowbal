import React from 'react';

function Hero () {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-[80vh] object-cover"
        src="/5527786-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 text-white h-full flex flex-col justify-center items-start max-w-5xl mx-32">
        <h1 className="text-4xl md:text-5xl mb-6">
          Meet The Digital Drivers Of Global Disruptors
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We catalyze business growth by reimagining digital experiences that
          conquer complex challenges through innovation and agility.
        </p>
        <button className="bg-blue-600 hover:bg-transparent border-2 border-transparent hover:border-white text-white py-3 px-6 rounded-md">
          Consult Our Experts {'>'} 
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
    </section>
  );
};

export default Hero;
