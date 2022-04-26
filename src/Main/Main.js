import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalCard from '../AnimalCard/AnimalCard';
//import { animals } from '../data.js';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((item) => (
        <AnimalCard key={item.name} {...item} />
      ))}
    </main>
  );
}