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
        <h2>Dentova Dental</h2>
      </div>

      <p>We bring together modern treatments, a comfortable clinic experience, and skilled dentists to create healthy and beautiful smiles.</p>
      <div className="footer-icons">
        <img src={footerLinkedinLogo} alt="footer Linkedin icon" />
        <img src={footerYoutubeLogo} alt="footer Youtube icon" />
        <img src={footerFacebookLogo} alt="footer Facebook icon" />
        <img src={footerTwitterLogo} alt="footer Twitter icon" />
      </div>
    </div>

    <div className="footer-col">
      <h2>Dentova Dental</h2>
        <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Clinic</a></li>
        <li><a href="#">Dentists</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Contact Info</h3>
      <ul>
        <li>P: +1 (212) 555-7890</li>
        <li>E: info@dentova.com</li>
        <li>A: 456 Bright Smile Ave...</li>
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

