"use client";
import { useEffect, useState } from "react";

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
      <a href="#home" className="pl-8">
        <h3>CG</h3>
      </a>
      <div className="pr-8 md:block hidden">
        <a href="#about" className="p-4">
          01. About
        </a>
        <a href="#projects" className="p-4">
          02. Projects
        </a>
        <a href="#contact" className="p-4">
          03. Contact
        </a>
      </div>
    </div>
  );
}
