import patientCareImg from '../assets/images/patient-care.png'

export default function About() {
  return (
    <section className="about-us">
      <div>
        <h4>About us</h4>
        <h2>Meet Dentova</h2>
        <p>Dentova Dental Clinic combines advanced technology with expert dental care to deliver safe, effective, and patient-centered treatments. With a focus on comfort and precision, our experienced team is committed to helping every patient achieve a healthy, confident smile.</p>
        <div className="stats-summary">
          <div className="stat-item">
            <h3>10+</h3>
            <h6>Years Experience</h6>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <h6>Successful Treatments</h6>
          </div>

          <div className="stat-item">
            <h3>98%</h3>
            <h6>Patient Satisfaction</h6>
          </div>


        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className='about-us-img'>
        <img src={patientCareImg} alt="Patient care illustration" />
      </div>
    </section>
  )
}