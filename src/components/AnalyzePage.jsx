import React from 'react';
import { useInstagramData } from '../hooks/useInstagramData';
import { UploadSection } from './UploadSection';
import { TraitorList } from './TraitorList';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 26 26" fill="none" stroke="url(#ig-gradient-title)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px', marginTop: '-6px' }}>
    <defs>
      <linearGradient id="ig-gradient-title" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#f09433" offset="0%" />
        <stop stopColor="#e6683c" offset="25%" />
        <stop stopColor="#dc2743" offset="50%" />
        <stop stopColor="#cc2366" offset="75%" />
        <stop stopColor="#bc1888" offset="100%" />
      </linearGradient>
    </defs>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="24" y1="24" x2="17.5" y2="17.5"></line>
  </svg>
);

export const AnalyzePage = () => {
  const {
    followers,
    following,
    traitors,
    error,
    handleFileUpload,
    calculateTraitors
  } = useInstagramData();

  return (
    <div className="analyze-page-container">
      <div className="analyze-header">
        <h1 className="analyze-title">
          Panel de <span className="gradient-text">Análisis</span> <SearchIcon />
        </h1>
        <p className="analyze-subtitle">
          Carga tus archivos para descubrir quién no te sigue de vuelta.
        </p>
      </div>

      <UploadSection 
        followers={followers}
        following={following}
        error={error}
        handleFileUpload={handleFileUpload}
        calculateTraitors={calculateTraitors}
      />

      <TraitorList traitors={traitors} />
    </div>
  );
};
