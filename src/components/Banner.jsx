import playIcon from '../assets/icons/play-circle.svg'
import theExaminee from '../assets/images/the-examinee.png'

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className = "banner-info">
          <div>
            <h1>Your Smile Deserves the Best</h1>
            <p>At Dentova Dental Clinic, our expert team and modern technology ensure healthy, safe, and beautiful smiles.</p>
          </div>

          <div className='banner-btn-group'>
            <button>Our Services</button>
            <div className='asd'>
              <img src={playIcon} alt="Play icon" />
              <a href="#" role="button">Watch Our Clinic</a>
            </div>

          </div>
        </div>
        <div className='banner-img'>
          <img className='banner-image' src={theExaminee} alt="Banner Example Image" />

        </div>


      </div>
    </section>
  )
}