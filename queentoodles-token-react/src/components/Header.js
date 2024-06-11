import '../styles/Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("6EekDbuTknr9iZPskCZ7ApYMRxoD6UTiKkdEQY1SDJpf");
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 1500);
  };

  return (
    <div className="hero">
      <img src="secondtatefixed.png" alt="Andrew Tate" className="hero-image" />
      <div className="hero-content">
        <h4 className='contract-address-top' style={{ color: '#2a2a2a' }}>
          CA: <span className="copyable-text" onClick={copyToClipboard}>6EekDbuTknr9iZPskCZ7ApYMRxoD6UTiKkdEQY1SDJpf</span>
        </h4>
        <h1 className="hero-title">
          <span style={{ fontSize: "60px" }}>BOOK</span> <br />
          <span style={{ fontSize: "45px" }}>OF</span> <br />
          ANDREW TATE
        </h1>
        <div className="icon-row">
          <Link to={"https://www.google.com"} className='Link'><img src="x-social-media-black-icon.png" alt="Twitter" /></Link>
          <Link to={"https://www.google.com"} className='Link'><img src="661375b92a7e1a5a2d.png" alt="Dexscreener" /></Link>
          <Link to={"https://www.google.com"} className='Link'><img src="telegram-icon-2048x1725-i4kw83ca.png" alt="Telegram" /></Link>
        </div>
        <h4 className='contract-address-bottom' style={{ color: '#f6c836' }}>
          CA: <span className="copyable-text" onClick={copyToClipboard}>6EekDbuTknr9iZPskCZ7ApYMRxoD6UTiKkdEQY1SDJpf</span>
        </h4>
        {showCopiedMessage && <span className="copied-message">Copied to clipboard</span>}
      </div>
    </div>
  );
}

export default Header;
