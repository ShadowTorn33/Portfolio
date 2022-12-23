import React from "react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const res = await fetch("./projects.json");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.github}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };
  return projects ? loaded() : <h1>Loading. . .</h1>;
};

export default Projects;
