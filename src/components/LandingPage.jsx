import React from 'react';
import logo from '../assets/logo.png'; 

export const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-container">
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Auditoría de seguidores <br/>
            <span className="gradient-text">segura y local</span>
          </h1>
          <p className="hero-subtitle">
            Descubre quién no te sigue de vuelta en Instagram sin entregar tus contraseñas, 
            sin riesgo de baneos y procesando la información directamente en tu propio navegador.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onStart}>
              Comenzar a analizar
            </button>
            <a href="#cómo-funciona" className="btn-secondary" onClick={(e) => {
                e.preventDefault();
                alert("Primero descargas tus datos de Meta en formato JSON, luego los cargas aquí. ¡Nosotros hacemos el cruce de datos matemáticamente!");
            }}>
              ¿Cómo funciona?
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img src={logo} alt="Unfollow Spy Illustration" className="hero-graphic" />
        </div>
      </main>
    </div>
  );
};