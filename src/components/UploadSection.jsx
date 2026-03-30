export const UploadSection = ({ followers, following, error, handleFileUpload, calculateTraitors }) => {
  return (
    <div className="upload-section">
      <div>
        <label><strong>1. Sube tu archivo followers_1.json</strong></label>
        <input 
          type="file" 
          accept=".json"
          onChange={(e) => handleFileUpload(e, 'followers')} 
          style={{marginTop: '8px', display: 'block'}}
        />
        {followers.length > 0 && (
          <span style={{color: 'green', fontSize: '12px'}}>✅ {followers.length} seguidores cargados</span>
        )}
      </div>

      <div>
         <label><strong>2. Sube tu archivo following.json</strong></label>
         <input 
           type="file" 
           accept=".json"
           onChange={(e) => handleFileUpload(e, 'following')} 
           style={{marginTop: '8px', display: 'block'}}
         />
         {following.length > 0 && (
           <span style={{color: 'green', fontSize: '12px'}}>✅ {following.length} seguidos cargados</span>
         )}
      </div>

      {error && <p className="error-message">{error}</p>}

      <button className="upload-button" onClick={calculateTraitors}>
        Analizar "Traidores"
      </button>
    </div>
  );
};
