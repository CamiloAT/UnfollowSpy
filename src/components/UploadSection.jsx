import React, { useRef, useState } from 'react';
import { TutorialModal } from './TutorialModal';

const InstagramGradient = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#f09433" offset="0%" />
        <stop stopColor="#e6683c" offset="25%" />
        <stop stopColor="#dc2743" offset="50%" />
        <stop stopColor="#cc2366" offset="75%" />
        <stop stopColor="#bc1888" offset="100%" />
      </linearGradient>
    </defs>
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export const UploadSection = ({ followers, following, error, handleFileUpload, calculateTraitors }) => {
  const followersInputRef = useRef(null);
  const followingInputRef = useRef(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [localErrors, setLocalErrors] = useState(false);
  const [showTutorial, setShowTutorial] = useState(() => {
    return localStorage.getItem('unfollowSpy_tutorial_seen') !== 'true';
  });

  const handleCloseTutorial = () => {
    localStorage.setItem('unfollowSpy_tutorial_seen', 'true');
    setShowTutorial(false);
  };

  const handleClick = (ref) => {
    ref.current.click();
    setLocalErrors(false);
  };

  const onAnalyzeClick = () => {
    if (followers.length === 0 || following.length === 0 || error) {
      setLocalErrors(true);
      return; 
    }

    setLocalErrors(false);
    setIsAnalyzing(true);
    setTimeout(() => {
      calculateTraitors();
      setIsAnalyzing(false);
    }, 1500);
  };

  let hintMessage = "Debes subir ambos archivos correctos para comenzar el análisis.";
  if (localErrors) {
      if (followers.length === 0 && following.length === 0) hintMessage = "Por favor sube ambos archivos antes de continuar.";
      else if (followers.length === 0) hintMessage = "Falta subir tu archivo 'followers_1.json', no podemos continuar por motivos de seguridad.";
      else if (following.length === 0) hintMessage = "Falta subir tu archivo 'following.json', no podemos continuar por motivos de seguridad.";
      else if (error) hintMessage = "Soluciona el error en los archivos antes de continuar.";
  }

  return (
    <div className="modern-upload-container">
      <InstagramGradient />
      <div className="upload-cards">
        <div className={`upload-card ${followers.length > 0 ? 'success' : ''} ${localErrors && followers.length === 0 ? 'error-state' : ''}`} onClick={() => handleClick(followersInputRef)}>
          <div className="upload-icon">
            {followers.length > 0 ? <CheckCircleIcon /> : (localErrors && followers.length === 0) ? <ErrorIcon/> : <FolderIcon />}
          </div>
          <h3 className="upload-title">1. followers_1.json</h3>
          <p className="upload-desc">
            {followers.length > 0 
              ? `${followers.length} seguidores cargados con éxito.` 
              : 'Haz clic aquí para seleccionar tu archivo de seguidores.'}
          </p>
          <input 
            type="file" 
            accept=".json"
            ref={followersInputRef}
            onChange={(e) => { setLocalErrors(false); handleFileUpload(e, 'followers'); }} 
            className="hidden-input"
          />
        </div>

        <div className={`upload-card ${following.length > 0 ? 'success' : ''} ${localErrors && following.length === 0 ? 'error-state' : ''}`} onClick={() => handleClick(followingInputRef)}>
          <div className="upload-icon">
            {following.length > 0 ? <CheckCircleIcon /> : (localErrors && following.length === 0) ? <ErrorIcon/> : <FolderIcon />}
          </div>
          <h3 className="upload-title">2. following.json</h3>
          <p className="upload-desc">
            {following.length > 0 
              ? `${following.length} seguidos cargados con éxito.` 
              : 'Haz clic aquí para seleccionar tu archivo de seguidos.'}
          </p>
          <input 
            type="file" 
            accept=".json"
            ref={followingInputRef}
            onChange={(e) => { setLocalErrors(false); handleFileUpload(e, 'following'); }} 
            className="hidden-input"
          />
        </div>
      </div>

      {error && (
        <div className="error-banner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ErrorIcon /> {error}
        </div>
      )}

      <div className="analyze-action-wrapper">
        <button 
          className={`btn-primary analyze-btn ${followers.length === 0 || following.length === 0 ? 'disabled-visual' : ''}`}
          onClick={onAnalyzeClick}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
               <div className="button-spinner"></div>
               Analizando...
            </div>
          ) : (
            'Analizar traidores'
          )}
        </button>
        <p className={`helper-text ${localErrors ? 'helper-text-error' : ''}`} style={{ color: localErrors ? '#dc2626' : '#9ca3af', fontWeight: localErrors ? '600' : 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          {localErrors && <ErrorIcon />}
          <span>{hintMessage}</span>
        </p>
      </div>

      {!(followers.length > 0 && following.length > 0) && (
        <div className="tutorial-open-btn-container">
          <button 
            className="tutorial-open-btn" 
            onClick={() => setShowTutorial(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tutorial-icon-gradient">
              <defs>
                <linearGradient id="tutorial-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" stroke="url(#tutorial-ig-gradient)"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="url(#tutorial-ig-gradient)"></path>
              <line x1="12" y1="17" x2="12.01" y2="17" stroke="url(#tutorial-ig-gradient)"></line>
            </svg>
            <span>¿No sabes cómo obtener tus archivos? <span className="tutorial-highlight-text">Ver tutorial</span></span>
          </button>
        </div>
      )}

      {showTutorial && <TutorialModal onClose={handleCloseTutorial} />}
    </div>
  );
};

