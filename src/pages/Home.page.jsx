
import React from 'react';
import MetaTag from '../components/MetaTag.component';
import Hero from '../components/HomeHero.component';
import Project from '../components/HomeWorks.component';

export default function HomePage() {
  return (
    <div>
    <MetaTag metatagPage='Home' />
    <Hero/>
    <Project/>
    </div>
  );
}