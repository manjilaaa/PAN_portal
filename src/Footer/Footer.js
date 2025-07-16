import React from "react";
import './Footer.css';  // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-description">
          <p>
            Thank you for visiting the PAN Registration Portal.
          </p>
        </div>
        <div className="footer-links">
          <div className="team-section">
            <h3>Our Team</h3>
            <div className="team-row">
              <div className="team-member">
                <h4>Manjila Thapa</h4>
                
                <p className="social-icon">
                  <a href="mailto:thapamanjila09@gmail.com">
                    <img src="./email.png" alt="Email" className="favicon" />
                  </a>
               
                  <a href="https://github.com/manjilaaa" target="_blank" rel="noopener noreferrer">
                    <img src="./github.png" alt="GitHub" className="favicon" />
                  </a>
                </p>
              </div>
              <div className="team-member">
                <h4>Mandira Shiwakoti</h4>
                <p className="social-icon">
                  <a href="mailto:mandeerashiwakoti@gmail.com">
                    <img src="./email.png" alt="Email" className="favicon" />
                  </a>
                  <a href="https://github.com/Mandira-Shiwakoti" target="_blank" rel="noopener noreferrer">
                    <img src="./github.png" alt="GitHub" className="favicon" />
                  </a>
                </p>
              </div>
              <div className="team-member">
                <h4>Krizan Vaidhya</h4>
                <p className="social-icon">
                  <a href="mailto:kzn.brl@gmail.com">
                    <img src="./email.png" alt="Email" className="favicon" />
                  </a>
                
                
                  <a href="https://github.com/kznvaidya" target="_blank" rel="noopener noreferrer">
                    <img src="./github.png" alt="GitHub" className="favicon" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PAN Registration Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
