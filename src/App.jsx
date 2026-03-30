import { useInstagramData } from './hooks/useInstagramData';
import { UploadSection } from './components/UploadSection';
import { TraitorList } from './components/TraitorList';
import './styles/index.css';

function App() {
  const {
    followers,
    following,
    traitors,
    error,
    handleFileUpload,
    calculateTraitors
  } = useInstagramData();

  return (
    <div className="app-container">
      <div className="header">
        <h1>Unfollow Spy 🕵️‍♂️</h1>
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
  );
}

export default App;
