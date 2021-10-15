import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <p className="text-center">
        Developed by
        <strong>
          <a
            href="https://github.com/ayushzaveri05"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Ayush Zaveri
          </a>
        </strong>{' '}
        and
        <strong>
          <a
            href="https://github.com/DeepChaklasiya"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Deep Chaklasiya
          </a>
        </strong>
      </p>
    </footer>
  );
};

export default Footer;
