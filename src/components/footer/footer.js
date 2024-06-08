<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="footer-top-social">
                            <Link href="#" aria-label="Facebook" className="social-icon"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#" aria-label="Instagram" className="social-icon"><i className="fab fa-instagram"></i></Link>
                            <Link href="#" aria-label="Twitter" className="social-icon"><i className="fab fa-twitter"></i></Link>
                            <Link href="#" aria-label="YouTube" className="social-icon"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <Link href="#">FAQ</Link>
                            <Link href="#">Investor Relations</Link>
                            <Link href="#">Privacy</Link>
                            <Link href="#">Speed Test</Link>
                        </div>
                        <div className="footer-column">
                            <Link href="#">Help Center</Link>
                            <Link href="#">Jobs</Link>
                            <Link href="#">Cookie Preferences</Link>
                            <Link href="#">Legal Notices</Link>
                        </div>
                        <div className="footer-column">
                            <Link href="#">Account</Link>
                            <Link href="#">Ways to Watch</Link>
                            <Link href="#">Corporate Information</Link>
                            <Link href="#">Only on Netflix</Link>
                        </div>
                        <div className="footer-column">
                            <Link href="#">Media Center</Link>
                            <Link href="#">Terms of Use</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-service-code">
                            <button className="service-code-button">Nguyen Hoang Son</button>
                        </div>
                        <p className="footer-note">© 2024 Netflix, Inc.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
=======
// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/media-center">Media Center</Link></li>
            <li><Link to="/investor-relations">Investor Relations</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/ways-to-watch">Ways to Watch</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/cookie-preferences">Cookie Preferences</Link></li>
            <li><Link to="/corporate-information">Corporate Information</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>© 2024 Netflix, Inc.</p>
          <p>Netflix Clone created by HoangSon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 1da3e5217be024edcabf8ee38c48e4195cfe4f63
