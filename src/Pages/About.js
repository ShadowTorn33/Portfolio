import React from "react";
import { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const res = await fetch("https://portfolio-404-not-found.herokuapp.com/about");
    const data = await res.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
    </div>
  )
  return about ? loaded() : <h1>Loading. . .</h1>
};

export default About;
