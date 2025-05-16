import React from 'react';
import '../assets/css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ResultPulse. All rights reserved.</p>
    </footer>
  );
}
