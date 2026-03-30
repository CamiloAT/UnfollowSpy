import { useState } from 'react';
import { useInstagramData } from './hooks/useInstagramData';
import { UploadSection } from './components/UploadSection';
import { TraitorList } from './components/TraitorList';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header';
import './styles/index.css';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const {
    followers,
    following,
    traitors,
    error,
    handleFileUpload,
    calculateTraitors
  } = useInstagramData();

  return (
    <>
      <Header />
      
      {!isStarted ? (
        <LandingPage onStart={() => setIsStarted(true)} />
      ) : (
        <div className="app-container">
          <button className="back-button" onClick={() => setIsStarted(false)}>
            ← Volver al inicio
          </button>

          <div className="header">
            <h1>Panel de Análisis 🕵️‍♂️</h1>
            <p>Descubre quién no te sigue de vuelta</p>
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
      )}
    </>
  );
}

export default App;
