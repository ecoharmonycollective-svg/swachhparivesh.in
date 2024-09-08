import { Link } from "react-router-dom";
import "./styles/footer.css";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
function Footer() {
  let current_year = new Date().getFullYear();
  return (
    <div className="footer__container col cent">
      <div className="footer__grp__container row">
        <div className="footer__items footer__address col">
          <h3 className="address__header">Contact Us</h3>
          <p>
            <strong>Address:</strong> C-Block , Lane- 4-H, Saraswati Vihar,
            Ajabpur Khurd, Dehradun, Uttarakhand, India- 248121
          </p>
          <p>
            <p>
              Phone:{" "}
              <Link className="phone" to="tel:+91 9639002477">
                +91 9639002477{" "}
              </Link>
            </p>
            <p>
              Phone:{" "}
              <Link className="phone" to="tel:+91 9760090334">
                +91 9760090334
              </Link>
            </p>
          </p>
          <div className="social__media__item cent row">
            <Link to="https://facebook.com/DharampurVidhansabhaz">
              <img
                className="social__media__icon"
                src={Facebook}
                alt="Swachh Parivesh Facebook"
              />
            </Link>
            <Link to="https://instagram.com/swachhpfoundation">
              <img
                className="social__media__icon"
                src={Instagram}
                alt="Swachh Parivesh Facebook"
              />
            </Link>
          </div>
        </div>
        <div className="footer__items col">
          <h3 className="quick__header">Quick Links</h3>
          <ul className="quick__links__ul">
            <li>
              <Link className="quick__links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="quick__links" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="quick__links" to="/donation">
                Donation
              </Link>
            </li>
            <li>
              <Link className="quick__links" to="/media">
                Press On Us
              </Link>
            </li>
            <li>
              <Link className="quick__links" to="/sitemap.xml">
                Sitemaps
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__items col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9951648320903!2d78.0311329767131!3d30.294199274798856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092969337a9157%3A0x70f8e6b13c72b3f5!2sSwachh%20Parivesh%20Foundation!5e0!3m2!1sen!2sin!4v1712514016004!5m2!1sen!2sin"
            width="95%"
            height="95%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className="right__container">
        <p>
          &#169; {current_year} All Right Reserved By Swachh Parivesh Foundation
          & Developed By{" "}
          <a
            className="referral"
            href="http://xorblin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xorblin Digital Pvt. Ltd.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
