import footerDentalLogo from '../assets/icons/footer-logo.svg'
import footerLinkedinLogo from '../assets/icons/footer-linkedin.svg'
import footerYoutubeLogo from '../assets/icons/footer-youtube.svg'
import footerFacebookLogo from '../assets/icons/footer-facebook.svg'
import footerTwitterLogo from '../assets/icons/footer-twitter.svg'


export default function Footer() {
return (
  <footer className="footer">
  <div className="footer-container">

    <div className="footer-col brand">
      <div className='flex'>
        <img src={footerDentalLogo} alt="footer dental logo" />
       <a href="#header"><h2>Dentova Dental</h2></a>
      </div>

      <p>We bring together modern treatments, a comfortable clinic experience, and skilled dentists to create healthy and beautiful smiles.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com"><img src={footerLinkedinLogo} alt="footer Linkedin icon" /></a>
        <a href="https://www.youtube.com"><img src={footerYoutubeLogo} alt="footer Youtube icon" /></a>
        <a href="https://www.facebook.com"><img src={footerFacebookLogo} alt="footer Facebook icon" /></a>
        <a href="https://twitter.com"><img src={footerTwitterLogo} alt="footer Twitter icon" /></a>
      </div>
    </div>

    <div className="footer-col">
      <h3>Dentova Dental</h3>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#clinic">Our Clinic</a></li>
        <li><a href="#dentists">Dentists</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#comments">Testimonials</a></li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Contact Info</h3>
      <ul>
        <li><a href="tel:+12345678901">P: +1 (212) 555-7890</a></li>
        <li><a href="mailto:info@gmail.com">E: info@dentova.com</a></li>
        <li><a href="https://maps.app.goo.gl/5vAJ3My7t3ntu9w18">A: 456 Bright Smile Ave, NY 10001, USA</a></li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Opening Times</h3>
      <ul>
        <li>Mon - Fri: 08:00 - 17:00</li>
        <li>Sat: Closed</li>
        <li>Sun: Closed</li>
      </ul>
    </div>
  </div>
     <hr />

    <div className="footer-bottom">
      <p>Copyright @2025 Dentova Dental. All Rights Reserved </p>
      <p>User Terms & Conditions | Privacy Policy</p>
    </div>


</footer>
)

}

