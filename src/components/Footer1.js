import React from 'react'
import './Footer1.css'
import '@fortawesome/fontawesome-free/css/all.css';

const Footer1 = () => {
  return (
  <>
   <div id='love'>
        <section className="space" />
        <footer className="footer">
          <section className="footer-top">
            <section className="dropdown-section">
              <div className="dropdown">
                <select id="languages-dropdown" className="dropdown-button">
                  <option className="dropdown-item" value="Bengali">Bengali</option>
                  <option className="dropdown-item" value="Cantonese">Cantonese</option>
                  <option className="dropdown-item" selected value="English">English</option>
                  <option className="dropdown-item" value="French">French</option>
                  <option className="dropdown-item" value="German">German</option>
                  <option className="dropdown-item" value="Hindi">Hindi</option>
                  <option className="dropdown-item" value="Japanese">Japanese</option>
                  <option className="dropdown-item" value="Korean">Korean</option>
                  <option className="dropdown-item" value="Chinese">Chinese</option>
                  <option className="dropdown-item" value="Portugese">Portugese</option>
                  <option className="dropdown-item" value="Russian">Russian</option>
                  <option className="dropdown-item" value="Spanish">Spanish</option>
                </select>
              </div>
              <div className="dropdown">
                <select id="currency-dropdown" className="dropdown-button">
                  <option className="dropdown-item" value="AFN">AFN</option>
                  <option className="dropdown-item" value="ALL">ALL</option>
                  <option className="dropdown-item" value="AMD">AMD</option>
                  <option className="dropdown-item" value="AOA">AOA</option>
                  <option className="dropdown-item" value="ARS">ARS</option>
                  <option className="dropdown-item" value="AUD">AUD</option>
                  <option className="dropdown-item" value="CHF">CHF</option>
                  <option className="dropdown-item" value="DZD">DZD</option>
                  <option className="dropdown-item" value="EUR">EUR</option>
                  <option className="dropdown-item" value="GBP">GBP</option>
                  <option className="dropdown-item" value="JPY">JPY</option>
                  <option className="dropdown-item" selected value="USD">USD</option>
                </select>
              </div>
            </section>
            <section className="links-section">
              <div id="company-links" className="links-list">
                <h5 className="links-header">Company</h5>
                <a className="link-item" href=".">About</a>
                <a className="link-item" href=".">Careers</a>
                <a className="link-item" href=".">Press</a>
                <a className="link-item" href=".">Blog</a>
                <a className="link-item" href=".">Help</a>
                <a className="link-item" href=".">Policies</a>
                <a className="link-item" href=".">Disaster Reponse</a>
                <a className="link-item" href=".">Terms &amp; Privacy</a>
              </div>
              <div id="discover-links" className="links-list">
                <h5 className="links-header">Discover</h5>
                <a className="link-item" href=".">Trust &amp; Safety</a>
                <a className="link-item" href=".">Travel Credit</a>
                <a className="link-item" href=".">Gift Cards</a>
                <a className="link-item" href=".">Airbnb Picks</a>
                <a className="link-item" href=".">Mobile</a>
                <a className="link-item" href=".">Airbnb Action</a>
                <a className="link-item" href=".">Buisness Travel</a>
                <a className="link-item" href=".">Site Map</a>
              </div>
              <div id="hosting-links" className="links-list">
                <h5 className="links-header">Hosting</h5>
                <a className="link-item" href=".">Why Host</a>
                <a className="link-item" href=".">Hospitality</a>
                <a className="link-item" href=".">Responsible Hosting</a>
                <a className="link-item" href=".">Home Safety</a>
                <a className="link-item" href=".">Instant Book</a>
              </div>
            </section>
          </section>
          <div id="mobile-links" className="links-list-mobile">
            <a className="link-item" href=".">About</a>
            <a className="link-item" href=".">Careers</a>
            <a className="link-item" href=".">Press</a>
            <a className="link-item" href=".">Blog</a>
            <a className="link-item" href=".">Terms &amp; Policy</a>
          </div>
          <section className="footer-bottom">
            <div className="footer-bar" />
            <h4 className="join">Join Us On</h4>
            <section className="socialIcons-section">
            <div className="circle"><a href="." className="icon"><i className="fab fa-facebook" /></a></div>
      <div className="circle"><a href="." className="icon"><i className="fab fa-google-plus" /></a></div>
      <div className="circle"><a href="." className="icon"><i className="fab fa-twitter" /></a></div>
      <div className="circle"><a href="." className="icon"><i className="fab fa-linkedin" /></a></div>
      <div className="circle"><a href="." className="icon"><i className="fab fa-pinterest" /></a></div>
      <div className="circle"><a href="." className="icon"><i className="fab fa-youtube" /></a></div>
      <div className="circle"><a href="." className="icon"><i className="fab fa-instagram" /></a></div>
            </section>
            <p className="copywright">© Airbnb, Inc.</p>
          </section>
        </footer>
      </div>
  
  </>
  )
}

export default Footer1