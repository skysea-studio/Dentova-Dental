
import { TeethIcon } from "./TeethIcon";
import { animateServiceSlider } from "../assets/lib/Animation";
import React, { useEffect } from 'react';

export default function ServiceSlider() {

  useEffect(() => {
    animateServiceSlider();
  }, []);

  const serviceItem = (
    <>
      <div className="slider-item">
        <TeethIcon color="#FEFEFE" />
        <h2>Teeth Cleaning</h2>
      </div>
      <div className="slider-item">
        <TeethIcon color="#FEFEFE" />
        <h2>Orthodontics</h2>
      </div>
      <div className="slider-item">
        <TeethIcon color="#FEFEFE" />
        <h2>Dental Implants</h2>
      </div>

    </>
  );

  return (

    <section className="slider">
      <div className="slider-inner">
        {serviceItem}
        {serviceItem}
        {serviceItem}
        {serviceItem}
        {serviceItem}
        {serviceItem}
        {serviceItem}
      </div>
    </section>
  );
}