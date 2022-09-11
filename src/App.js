import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Card from './components/Card';
import React from 'react';
import Cards from './components/Cards.js';
import { useState, useEffect } from 'react';
//Main component for rendering all the child components
function App() {
  //With the use of map() we extract all the data from our Cards object and pass the entire object  as props,keeping the key
  const newCard = Cards.map((element) => {
    return <Card key={element.id} {...element} />;
  });

  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards_list'>{newCard}</section>
    </div>
  );
}

export default App;
