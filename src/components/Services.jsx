import LaserTeeth from "../assets/images/laser-teeth-whitening.png"
import ShadeMatching from "../assets/images/dental-shade-matching.png"
import OrhodonticBraces from "../assets/images/orthodontic-braces.png"




export default function Services() {
  return (
    <section id="services" className="our-services">
      <div className="our-services-title">
        <h4>Our Services</h4>
        <h2>Tailored Solutions for Your Dental Health</h2>
      </div>
      <div className="services-grid">
        <div className="services-card">
          <h3>Orthodontics</h3>
          <p>Modern treatments to straighten teeth and improve overall bite alignment.</p>
          <img src={OrhodonticBraces} alt="teeth cleaning with laser" />
        </div>
        <div className="services-card">
          <h3>Orthodontics</h3>
          <p>Modern treatments to straighten teeth and improve overall bite alignment.</p>
          <img src={LaserTeeth} alt="teeth cleaning with laser" />
        </div>
        <div className="services-card">
          <h3>Orthodontics</h3>
          <p>Modern treatments to straighten teeth and improve overall bite alignment.</p>
          <img src={ShadeMatching} alt="teeth cleaning with laser" />
        </div>
      </div>
    </section>
  )
}