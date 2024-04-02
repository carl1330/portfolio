"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [top, setTop] = useState("-64px");
  useEffect(() => {
    setTimeout(() => {
      setTop("0px");
    }, 200);
  }, []);

  return (
    <div
      className="flex justify-between items-center h-16 w-full z-10 bg-white text-black fixed shadow-sm font-mono"
      style={{ top: top, transition: "top 0.3s" }}
    >
      <a href="#" className="ml-8">
        <h3>CG</h3>
      </a>
      <div className="flex items-center pr-8">
        <a
          href="#about"
          className="mx-4 border-b border-b-transparent hover:border-b-black hover:border-dashed hover:border-b"
        >
          01. About
        </a>
        <a
          href="#projects"
          className="mx-4 border-b border-b-transparent hover:border-b-black hover:border-dashed hover:border-b"
        >
          02. Projects
        </a>
        <a
          href="#contact"
          className="mx-4 border-b border-b-transparent hover:border-b-black hover:border-dashed hover:border-b"
        >
          03. Contact
        </a>
        <a
          href="https://github.com/carl1330"
          target="_blank"
          className="mx-4 hover:scale-125 transition-all"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/carl-gulliksson/"
          target="_blank"
          className="hover:scale-125 transition-all"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
