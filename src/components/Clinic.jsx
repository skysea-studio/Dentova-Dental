import clinicImg from '../assets/images/clinic.jpg'
import DentalTools from '../assets/images/dental-tools-equipment.jpg'
import { animateClinicSection } from '../assets/lib/Animation';
import React, { useEffect } from 'react';

export default function Clinic() {

  useEffect(() => {
    animateClinicSection();
  }, []);

  return (
    <section id='clinic' className="our-clinic">
      <div className='clinic-info'>
        <h4>Our Clinic</h4>
        <h2>Where Expertise Meets Care </h2>
        <p>At Dentova Dental Clinic, we combine advanced technology with personalized dental care to create a safe, comfortable, and welcoming environment for every patient. From routine check-ups to complex treatments, your healthy smile is our top priority.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className='our-clinic-img'>
        <img className='first-clinic-img' src={clinicImg} alt="Our clinic illustration" />
        <img className='second-clinic-img' src={DentalTools} alt="Dental Tools Equipment" />
      </div>
    </section>
  )
}