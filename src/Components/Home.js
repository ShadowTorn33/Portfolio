import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-r from-[#a4c0c5] to-[#c9d8d2]">
      <div className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-5xl  sm:text-8xl p-2 text-[#56615c]">Full Stack</p>
        <p className="text-2xl sm:text-6xl p-2 text-[#56615c]">MERN</p>
        <p className="text-xl sm:text-4xl p-2 text-[#56615c]">See You Soon!</p>
      </div>
    </div>
  );
};

export default Home;
