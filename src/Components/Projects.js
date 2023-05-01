import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-gradient-to-r from-[#a4c0c5] to-[#c9d8d2]"
    >
      <div className="max-w-[1200px] mx-auto py-48 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="text-2xl sm:text-7xl border-[#56615c] border-b-4 my-8 text-[#56615c]">
            Projects
          </p>
          <p className="mb-10 text-2xl">Go ahead and hover!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div style={{ backgroundImage: "url(https://i.imgur.com/EGlHhif.png)" }} 
               className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto bg-Img">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="https://rainbow-tartufo-02371c.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#c9d8d2] text-[#4C5560]">Live Site</button>
                </a>
                <a href="https://github.com/ShadowTorn33/Memory-Match">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#c9d8d2] text-[#4C5560]">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl text-[#56615c]"> 
            <p>Memory Match</p>
            <p>Project 1</p>
            <p>HTML|CSS|JS</p>
        </div>
          <div style={{ backgroundImage: "url(https://i.imgur.com/Rt8PLPN.png)" }} 
               className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto bg-Img">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="https://voluble-cucurucho-4401c3.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#c9d8d2] text-[#4C5560]">Live Site</button>
                </a>
                <a href="https://github.com/ShadowTorn33/All-Sports">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#c9d8d2] text-[#4C5560]">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl text-[#56615c]">
            <p>All Sports</p>
            <p>Project 2</p>
            <p>API Rendering</p>
        </div>
          <div style={{ backgroundImage: "url(https://i.imgur.com/JsD4HTp.png)" }} 
               className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto bg-Img">
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="https://jade-heliotrope-86f957.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#c9d8d2] text-[#4C5560]">Live Site</button>
                </a>
                <a href="https://github.com/ShadowTorn33/Project-3-Frontend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#c9d8d2] text-[#4C5560]">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl text-[#56615c]">
            <p>Air Bnb Clone</p>
            <p>Project 3</p>
            <p>MERN Stack</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
