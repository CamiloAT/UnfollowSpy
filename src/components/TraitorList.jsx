export const TraitorList = ({ traitors }) => {
  if (!traitors || traitors.length === 0) return null;

  return (
    <div className="traitor-list">
      <div style={{padding: '15px 20px', backgroundColor: '#fafafa', borderBottom: '1px solid #dbdbdb'}}>
        <h3 style={{margin: 0}}>No te siguen de vuelta ({traitors.length}):</h3>
      </div>
      {traitors.map((username, index) => {
        // Validación extra en caso de que username venga nulo o vacío por formato inesperado de JSON
        const validUsername = username && typeof username === 'string' ? username : "Usuario Desconocido";
        const initial = validUsername !== "Usuario Desconocido" ? validUsername.charAt(0).toUpperCase() : "?";

        return (
          <div key={index} className="traitor-item">
            <div className="traitor-avatar">
              {initial}
            </div>
            <div className="traitor-info">
              {validUsername !== "Usuario Desconocido" ? (
                <a 
                  href={`https://instagram.com/${validUsername}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="traitor-username"
                >
                  @{validUsername}
                </a>
              ) : (
                <span className="traitor-username">{validUsername}</span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  );
};
