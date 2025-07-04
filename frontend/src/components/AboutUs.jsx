import React from "react";
import "./AboutUs.css";
import DashboardNavbar from "./DashboardNavbar";

const AboutUs = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="about-us-container">
        <header className="about-us-header">
          <h1>About Us <span className="wave-emoji">🌟</span></h1>
          <p className="tagline">Driving Change. Building Futures. Inspiring Excellence.</p>
        </header>

        <section className="chairman-section">
          <img 
            src="./Sajjan_jindal.png" 
            alt="Mr. Sajjan Jindal" 
            className="chairman-photo"
          />
          <div className="chairman-description">
            <h2>Mr. Sajjan Jindal</h2>
            <p>Chairman and Managing Director, JSW Group</p>
          </div>
        </section>

        <section className="about-us-section">
          <h2>Our Footprint</h2>
          <p>
            JSW, a global conglomerate, is changing the face of business with its
            transparent practices, people-friendly attitude, and dedicated
            employees. Our efficient management, resource utilization, and
            leveraging of every available opportunity is making us a force to
            reckon with on the international stage.
          </p>
        </section>

        <section className="locations">
          <h3>Global Presence <i className="fa fa-globe" aria-hidden="true"></i></h3>
          <div className="locations-grid">
            <div>
              <h4>India</h4>
              <ul>
                <li>Mumbai</li>
                <li>Delhi</li>
                <li>Hyderabad</li>
                <li>Chennai</li>
                <li>Goa</li>
                <li>Kolkata</li>
                <li>Odisha</li>
                <li>More...</li>
              </ul>
            </div>
            <div>
              <h4>USA</h4>
              <ul>
                <li>Baytown</li>
                <li>Ohio</li>
              </ul>
            </div>
            <div>
              <h4>Chile</h4>
              <ul>
                <li>Copiapó</li>
              </ul>
            </div>
            <div>
              <h4>Europe</h4>
              <ul>
                <li>Piombino, Italy</li>
              </ul>
            </div>
            <div>
              <h4>UAE</h4>
              <ul>
                <li>Fujairah</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-us-stats">
          <h2>Why JSW?</h2>
          <p>
            The US$ 24 billion JSW Group is ranked among India's leading business
            houses. JSW's innovative and sustainable presence in various sectors
            including Steel, Energy, Infrastructure, Cement, Paints, B2B
            Ecommerce, Venture Capital, Defence, Green Mobility, and Sports is
            helping the Group play an important role in driving India’s economic
            growth.
          </p>
          <p>
            With a culturally diverse workforce spread across India, USA, Europe,
            and Africa, JSW Group directly employs nearly 40,000 people. Our
            strong social development focus empowers local communities residing
            around our Plant & Port locations.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
