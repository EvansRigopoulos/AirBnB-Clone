import React from 'react';
import grid from '../images/photo-grid.PNG';
function Hero() {
  return (
    <section className='grid'>
      <img src={grid} alt='grid' className='hero--logo' />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
