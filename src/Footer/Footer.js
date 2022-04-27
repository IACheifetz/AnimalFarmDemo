import React from 'react';
import './Footer.css';

const clickTrick = () => {
  window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
};

export default function Footer(props) {
  return <>
    <footer>Copyright Alchemy Codelab {props.year}</footer>
    <button onClick={() => clickTrick()}>click me</button> </>;
  
}