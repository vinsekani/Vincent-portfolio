"use client"; // Add this line at the top

import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import About from "@/components/About"
import { useState } from "react";
import Services from "@/components/Services";
import Skills from "@/components/Skills"
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog"
import Footer from "@/components/Footer";

export default function Home() {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NAVBAR */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* HERO */}
        <Hero/>
        <div className="relative z-[30]">
          {/* ABOUT */}
          <About/>
          {/* SERVICES */}
          <Services/>
          {/* SKILLS */}
          <Skills/>
          {/* PROJECTS */}
          <Projects/>
          {/* TESTIMONIALS */}
          <Testimonials/>
          {/* BLOG */}
          <Blog/>
          {/* FOOTER */}
          <Footer/>
        </div>
      </div>
    </div>
  );
}
