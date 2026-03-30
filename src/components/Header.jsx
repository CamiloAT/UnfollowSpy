import React from 'react';
import logoRecorted from '../assets/logo_recorted.png';
import '../styles/index.css';

export const Header = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="#" className="header-logo-link" onClick={scrollToTop}>
          <img src={logoRecorted} alt="UnfollowSpy Logo" className="header-logo-img" />
          <span className="header-logo-text">UnfollowSpy</span>
        </a>
      </div>
    </header>
  );
};
