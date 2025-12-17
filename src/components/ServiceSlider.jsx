
import { TeethIcon } from "./TeethIcon";

export default function ServiceSlider() {
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