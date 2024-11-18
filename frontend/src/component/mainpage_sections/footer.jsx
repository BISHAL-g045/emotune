import React from 'react';
import footImage from "../../images/footer-bg.png";
import footImg from "../../images/countdown-bg.jpg";
import facebookIcon from "../../images/facebook-icon.png"; // Social media icon paths
import twitterIcon from "../../images/twitter-icon.png";
import instagramIcon from "../../images/instagram-icon.png";

export const Footer = () => {
  return (
    <>
      <div>
        {/* Background Image 1 */}
        <div 
          style={{
            backgroundImage: `url(${footImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'block',
            height: '100%',
            width: '100%',

          }}
        ></div>

        {/* Background Image 2 */}
        <div 
          style={{
            backgroundImage: `url(${footImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'block',
            height: '100%',
            width: '100%',
            zIndex: '1',
          }}
        >
          
          {/* About Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '20px',
            color: '#fff', 
          }}>
            {/* Contact Column */}
            <div style={{ textAlign: 'center' }} className='px-40'>
              <h3>Contact Us</h3>
              <p>Phone: +977 9813280881</p>
              <p>Email: EmoTune@gmail.com</p>
            </div>

            {/* Vertical Divider */}
            <div style={{
              width: '1px',
              backgroundColor: '#fff',
              height: '100px',
              margin: '0 20px',
            }}></div>

            {/* Social Media Column with Clickable Icons */}
            <div style={{ textAlign: 'center' }} className='px-40'>
              <h3>Follow Us</h3>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <a href="https://www.facebook.com/devendra.bakhati.3" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" style={{
                    width: '30px', 
                    borderRadius: '50%' // Inline style for round icon
                  }} />
                </a>
                <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" style={{
                    width: '30px', 
                    borderRadius: '50%' // Inline style for round icon
                  }} />
                </a>
                <a href="https://www.instagram.com/dev_indra62?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" style={{
                    width: '30px', 
                    borderRadius: '50%' // Inline style for round icon
                  }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
