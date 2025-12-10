import DanielCarter from "../assets/images/daniel-carter.jpg"
import MichealHarris from "../assets/images/micheal-harris.jpg"
import AdamReynolds from "../assets/images/adam-reynolds.jpg"

export default function Dentists() {
  return (
    <section className="dentists">

      <h4>Dentists</h4>
      <h2>Our Expert Dental Team</h2>



      <div className="dentist-cards">
        <div className="dentist-card">
          <img src={DanielCarter} alt="Daniel Carter" />
          <div className="dentist-card-info">
            <h3>Dr. Daniel Carter</h3>
            <h6>Cosmetic Dentistry</h6>
          </div>

        </div>
        <div className="dentist-card">
          <img src={MichealHarris} alt="Micheal Harris" />
          <div className="dentist-card-info">
            <h3>Dr. Michael Harris</h3>
            <h6>Endodontist</h6>
          </div>

        </div>
        <div className="dentist-card">
          <img src={AdamReynolds} alt="Adam Reynolds" />
          <div className="dentist-card-info">
            <h3>Dr. Adam Reynolds</h3>
            <h6>General Dentist</h6>
          </div>

        </div>
      </div>
    </section>
  )
}