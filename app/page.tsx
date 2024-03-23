'use client';

import dynamic from 'next/dynamic';


const Hero = dynamic(() => import("@/components/main/Hero"));
const Skills = dynamic(() => import("@/components/main/Skills"));
const Projects = dynamic(() => import("@/components/main/Projects"));
const Footer = dynamic(() => import("@/components/main/Footer"));
const Education = dynamic(() => import("@/components/main/Education"));



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Education />
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </main>
  );
}
