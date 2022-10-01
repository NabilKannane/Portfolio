import React from 'react'
import "./Section3.css";
import TitleSection from '../TitleSection/TitleSection';
import Slider from'./Slider/Slider'

export default function Section1() {
  return (
    <section className='section' id='works'>
      <TitleSection title="Works"  tparagraphe="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
 <Slider/>

    </section>
  )
}
