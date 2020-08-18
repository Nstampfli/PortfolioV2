
import React from 'react';
import MetaTag from '../components/MetaTag.component';
import Hero from '../components/HomeHero.component';
import Project from '../components/HomeWorks.component';
import About from '../components/HomeAbout.component';

export default function HomePage() {
  return (
    <div>
    <MetaTag metatagPage='Home' />
    <Hero/>
    <Project/>
    <About/>
    </div>
  );
}