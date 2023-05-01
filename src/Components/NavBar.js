import React from "react";
import { useState } from "react";
import { ImCool } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import {Link} from 'react-scroll'

const NavBar = () => {
    const [navBar, setNavBar] = useState(false)
    const handleClick = () => setNavBar(!navBar)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#A4C0C5] text-[#4C5560]">
      <div>
        <ImCool size={42} color="purple" />
      </div>

        <ul className="hidden md:flex font-[Bebas-Neue] text-xl">
          <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
          Home
        </Link></li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >
          About
        </Link></li>
          <li><Link activeClass="active" to="technologies" spy={true} smooth={true} duration={500}>
          Technologies
        </Link></li>
          <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} >
          Projects
        </Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
          Contact
        </Link></li>
        </ul>

        {/* Mobile Menu Icon */}
      <div onClick={handleClick} className="md:hidden z-20">
        <GiHamburgerMenu />
      </div>

        {/* Mobile Menu */}
        <ul className={!navBar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen font-[Bebas-Neue] text-xl bg-[#A4C0C5] flex flex-col justify-center items-center'}>
          <li className="py-4 text-3xl"><Link onClick={handleClick} activeClass="active" to="home" spy={true} smooth={true} duration={500} >
          Home
        </Link></li>
          <li className="py-4 text-3xl"><Link onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} duration={500} >
          About
        </Link></li>
          <li className="py-4 text-3xl"><Link onClick={handleClick} activeClass="active" to="technologies" spy={true} smooth={true} duration={500}>
          Technologies
        </Link></li>
          <li className="py-4 text-3xl"><Link onClick={handleClick} activeClass="active" to="projects" spy={true} smooth={true} duration={500} >
          Projects
        </Link></li>
          <li className="py-4 text-3xl"><Link onClick={handleClick} activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
          Contact
        </Link></li>
        </ul>

    {/* social icons */}
      <ul className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <li className="py-3 border-2 border-black"> <a href="https://github.com/ShadowTorn33"> <FaGithub size={30} color="" /> </a> </li>
        <li className="py-3 my-1 border-2 border-black"> <a href="https://www.linkedin.com/in/a-cheer/"> <FaLinkedin size={30} color="#017AB6" /> </a> </li>
      </ul>
    </div>
  );
};

export default NavBar;
