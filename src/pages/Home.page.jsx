
import React from 'react';
import MetaTag from '../components/MetaTag.component';
import Hero from '../components/Hero.component';

export default function HomePage() {
  return (
    <div>
    <MetaTag metatagPage='Home' />
    <Hero/>
    </div>
  );
}