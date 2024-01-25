import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>

          <div className="footer-section social">
            <h2>We deliver to:</h2>
              <ul>
                <li>Bangalore</li>
                <li>Mumbai</li>
                <li>Pune</li>
                <li>Goa</li>
                <li>Noida</li>
              </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Food Ordering App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
