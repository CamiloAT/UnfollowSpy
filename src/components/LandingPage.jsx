import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import landingImage from '../assets/landing_page_image.png';
import { Footer } from './Footer';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const howItWorksRef = useRef(null);
  
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [activeStep, isAutoPlay]); // reset interval on activeStep change

  const handleNavigate = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate('/analyze');
    }, 1500);
  };

  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {isNavigating && (
        <div className="fullscreen-overlay">
          <div className="ig-spinner">
            <div className="ig-spinner-inner"></div>
          </div>
          <h2 className="loading-text-overlay">Preparando entorno...</h2>
        </div>
      )}

      <div className="landing-container">
        <main className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up stagger-1">
              Auditoría de seguidores <br/>
              <span className="gradient-text">segura y local</span>
            </h1>
            <p className="hero-subtitle fade-in-up stagger-2">
              Descubre quién no te sigue de vuelta en Instagram sin entregar tus contraseñas, 
              sin riesgo de baneos y procesando la información directamente en tu propio navegador.
            </p>
            <div className="hero-actions fade-in-up stagger-3">
              <button className="btn-primary hero-btn" onClick={handleNavigate}>
                Comenzar a analizar
              </button>
              <a href="#como-funciona" className="btn-secondary hero-btn" onClick={scrollToHowItWorks}>
                ¿Cómo funciona?
              </a>
            </div>
          </div>
          
          <div className="hero-image-container fade-in-up stagger-4">
            <img src={logo} alt="Unfollow Spy Illustration" className="hero-graphic float-animation" />
          </div>
        </main>

        <section className="promo-section fade-in-scroll">
          <h2 className="promo-title">Descubre tu audiencia <span className="gradient-text">sin límites</span></h2>
          <p className="promo-subtitle">
            Deja de depender de apps dudosas que pueden hacer que bloqueen tu cuenta. Con nuestra tecnología, descargas tus datos oficiales de Meta y los analizas directamente aquí en tu dispositivo. Garantizamos cero conexiones a servidores externos y cero baneos. Únete a la nueva era de la auditoría personal segura.
          </p>
        </section>

        <section id="como-funciona" ref={howItWorksRef} className="how-it-works-section fade-in-scroll">
          <div className="how-it-works-content">
            <div className="how-it-works-image">
              <div className="image-backdrop-glow"></div>
              <img src={landingImage} alt="Demostración de UnfollowSpy" className="demonstration-graphic tilt-animation" />
            </div>

            <div className="how-it-works-text">
              <h2 className="section-title">El poder de tus datos, <br/><span className="gradient-text">explicado de forma simple</span></h2>
              
              <div className="steps-container">
                {[
                  {
                    title: "Descarga oficial desde Meta",
                    description: "Solicitas tu información directamente desde la configuración de Instagram en formato JSON. 100% legal y avalado por las normativas de datos."
                  },
                  {
                    title: "Carga segura y privada",
                    description: "Sube los archivos descargados a nuestra plataforma. Todo se procesa en la memoria de tu navegador, sin enviar absolutamente nada a internet."
                  },
                  {
                    title: "Descubre resultados exactos",
                    description: "Nuestro algoritmo cruza las listas instantáneamente, revelando quién no te sigue de vuelta, a quién no sigues y las fechas exactas."
                  }
                ].map((step, index) => (
                  <div 
                    key={index}
                    className={`interactive-step ${activeStep === index ? 'active' : ''}`}
                    onClick={() => {
                        setActiveStep(index);
                        setIsAutoPlay(false);
                    }}
                  >
                    <div className="step-progress-bar">
                      {activeStep === index && (
                        <div className={`step-progress-fill ${!isAutoPlay ? 'paused' : ''}`}></div>
                      )}
                    </div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <div className="step-description-wrapper">
                         <p>{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="features-section fade-in-scroll">
          <div className="feature-card hover-lift">
            <div className="feature-icon-wrapper pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
                <defs>
                  <linearGradient id="shield-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#shield-grad)"></path>
                <path d="m9 12 2 2 4-4" stroke="url(#shield-grad)"></path>
              </svg>
            </div>
            <h3>Privacidad Absoluta</h3>
            <p>Todo el análisis se ejecuta localmente en tu navegador. Tus datos nunca viajan por internet ni se guardan en servidores.</p>
          </div>

          <div className="feature-card hover-lift delay-1">
            <div className="feature-icon-wrapper pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="url(#shield-grad)"></path>
              </svg>
            </div>
            <h3>Precisión Inmediata</h3>
            <p>Vanguardia en procesamiento web. El cruce de datos masivo ocurre en tiempo real entregando resultados matemáticamente perfectos.</p>
          </div>

          <div className="feature-card hover-lift delay-2">
            <div className="feature-icon-wrapper pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="url(#shield-grad)"></polygon>
              </svg>
            </div>
            <h3>Filtros Inteligentes</h3>
            <p>Organiza a tus seguidores y seguidos dinámicamente con múltiples opciones de clasificación: orden alfabético y antigüedad.</p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};