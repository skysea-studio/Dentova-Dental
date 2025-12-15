import headerLogo from '../assets/icons/header-logo.svg'
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import locationIcon from '../assets/icons/location.svg'
import burgerMenuIcon from '../assets/icons/burger-menu.svg'
import headerLinkedinLogo from '../assets/icons/footer-linkedin.svg'
import headerYoutubeLogo from '../assets/icons/footer-youtube.svg'
import headerFacebookLogo from '../assets/icons/footer-facebook.svg'
import headerTwitterLogo from '../assets/icons/footer-twitter.svg'


export default function Header() {
  return (
    <header className="header">

      <input type="checkbox" id="menuToggle" className="menu-toggle" />

      <div className="top-bar">
        <div className='top-bar-items'>
          <a href="tel:+12345678901">
            <img src={phoneIcon} alt="phone icon" />
            <h4 className='header-hidden'>+1 (212) 555-7890</h4>
          </a>
          <a href="mailto:info@gmail.com">
            <img src={emailIcon} alt="Email icon" />
            <h4 className='header-hidden'>info@dentova.com</h4>
          </a>
            <a href='https://maps.app.goo.gl/5vAJ3My7t3ntu9w18'>
            <img src={locationIcon} alt="Location icon" />
            <h4 className='header-hidden'>456 Bright Smile Ave, NY 10001, USA</h4>
          </a>
        </div>

        <div className="header-icons">
        <img src={headerLinkedinLogo} alt="Header Linkedin icon" />
        <img src={headerYoutubeLogo} alt="Header Youtube icon" />
        <img src={headerFacebookLogo} alt="Header Facebook icon" />
        <img src={headerTwitterLogo} alt="Header Twitter icon" />
        </div>


        <label htmlFor="menuToggle" className="burger">
          <img src={burgerMenuIcon} alt="Hamburger menu icon" width={30} />
        </label>
      </div>

      <nav className="mobile-menu">
        <div className='mobile-menu-logo-section'>
          <img src="./assets/logo.svg" alt="" width={35} />
          <h2>Dentova Dental</h2>
        </div>
        <a href="#">About Us</a>
        <a href="#">Dentists</a>
        <a href="#">Our Clinic</a>
        <a href="#">Our Services</a>
        <a href="#">Testimonials</a>
      </nav>

      <nav className='desktop-menu'>
        <div className='flex'>
          <img src={headerLogo} alt="Header logo Desktop" width={21}/>
          <h5>Dentova Dental</h5>
        </div>

        <div className='nav-menu'>
          <a href="#">About Us</a>
          <a href="#">Dentists</a>
          <a href="#">Our Clinic</a>
          <a href="#">Our Services</a>
          <a href="#">Testimonials</a>
        </div>

        <div>
          <button className='nav-button'>Book Appointment</button>
        </div>

      </nav>
    </header>
  )
}
