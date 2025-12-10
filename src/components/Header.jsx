import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/email.svg'
import burgerMenuIcon from '../assets/icons/burger-menu.svg'


export default function Header() {
  return (
    <header className="header">

      <input type="checkbox" id="menuToggle" className="menu-toggle" />

      <div className="top-bar">
        <div className='top-bar-items'>
          <a href="tel:+12345678901">
            <img src={phoneIcon} alt="phone icon" />
          </a>
          <a href="mailto:info@gmail.com">
            <img src={emailIcon} alt="Email icon" />
          </a>
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

    </header>
  )
}
