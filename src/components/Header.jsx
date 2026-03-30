import React from 'react';
import { Link } from 'react-router-dom';
import logoRecorted from '../assets/logo_recorted.png';
import '../styles/index.css';

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/home" className="header-logo-link" onClick={scrollToTop}>
          <img src={logoRecorted} alt="UnfollowSpy Logo" className="header-logo-img" />
          <span className="header-logo-text">UnfollowSpy</span>
        </Link>
      </div>
    </header>
  );
};
