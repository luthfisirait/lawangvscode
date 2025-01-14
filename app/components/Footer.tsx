import React from "react";
import  '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="flex top-section">
              {/* Social Media Links */}
              <div className="social-section">
                <div className="social-icons">
                  <a href="#" className="icon">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <p className="follow-text">FOLLOW OUR BLOG</p>
              </div>
    
              {/* Additional Social Media Icons */}
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
    
              {/* Contact */}
              <div>
                <a href="#" className="link">
                  EMAIL US
                </a>
              </div>
            </div>
    
            {/* Links and Subscribe */}
            <div className="flex bottom-section">
              <div>
                <h3 className="title">Legal Terms</h3>
                <ul className="list">
                  <li>
                    <a href="#" className="link">
                      Refund Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Donation Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
    
              <div>
                <h3 className="title">Event Resources</h3>
                <ul className="list">
                  <li>
                    <a href="#" className="link">
                      Partnership Proposition
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Info Partnership Proposition
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link">
                      Media Kit
                    </a>
                  </li>
                </ul>
              </div>
    
              <div>
                <h3 className="title">Subscribe</h3>
                <p className="subscribe-text">
                  No spam, only the latest news and updates!
                </p>
                <form className="subscribe-form">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input"
                  />
                  <button type="submit" className="button">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 | Terms of Use
          </div>
        </footer>
      );
    };

export default Footer;