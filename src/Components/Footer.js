import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = ({ mode }) => {
  const footerStyle = {
    backgroundColor: mode === 'dark' ? '#333333' : '#fff',
    color: mode === 'dark' ? '#fff' : '#000',
    padding: '8px ,0',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '40px', 
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyle = {
    margin: '0 10px',
    fontSize: '20px',
    padding: '2px',
    color: mode === 'dark' ? '#fff' : '#000',
  };

  const textStyle = {
    marginLeft: '8px',
    fontSize: '14px',
    textDecoration: 'underline',
    color: mode === 'dark' ? '#fff' : '#000',
  };

  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://www.facebook.com/gulsherAliSyed.407?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={iconStyle} />
          </a>
          <a href="http://wa.me/+923071001460" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={iconStyle} />
          </a>
          <a href="https://www.instagram.com/syedali407" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} />
          </a>
        </p>
        <p style={textStyle}>Gulsher Ali:/+923071001460</p>
      
      </div>
    </footer>
  );
};

export default Footer;
