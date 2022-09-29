import React from 'react'
import "./Section3.css";
import TitleSection from '../TitleSection/TitleSection';

export default function Section1() {
  return (
    <section className='section' id='works'>
      <TitleSection title="Works"  tparagraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    <div>
      <img src='https://via.placeholder.com/450x350'/>
      <h2>Nom Projet I</h2>
      <p>Esse anim aute anim elit excepteur irure magna...</p>
      <button>View Full Project</button>
    </div>
    </section>
  )
}
