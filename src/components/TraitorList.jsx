export const TraitorList = ({ traitors }) => {
  if (!traitors || traitors.length === 0) return null;

  const formatDate = (timestamp) => {
    if (!timestamp) return null;
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getDaysAgo = (timestamp) => {
    if (!timestamp) return null;
    const days = Math.floor((Date.now() - timestamp * 1000) / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="traitor-list-container">
      <div className="traitor-list-header">
        <h3>Resultados del Análisis</h3>
        <span className="traitor-badge">{traitors.length} cuentas no te siguen</span>
      </div>
      <div className="traitor-grid">
        {traitors.map((userObj, index) => {
          const username = typeof userObj === 'string' ? userObj : userObj.username;
          const timestamp = userObj.timestamp;
          
          const validUsername = username && typeof username === 'string' ? username : "Usuario Desconocido";
          const initial = validUsername !== "Usuario Desconocido" ? validUsername.charAt(0).toUpperCase() : "?";

          // Animación escalonada (maximo 2 segundos para no eternizar listas enormes)
          const animationDelay = Math.min(index * 0.05, 2); 

          const formattedDate = formatDate(timestamp);
          const daysAgo = getDaysAgo(timestamp);

          return (
            <div 
              key={index} 
              className="modern-traitor-card"
              style={{ animationDelay: `${animationDelay}s` }}
            >
              <div className="modern-traitor-card-left">
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
                  <span className="traitor-status"> No te sigue de vuelta</span>
                </div>
              </div>

              {(formattedDate || daysAgo !== null) && (
                <div className="modern-traitor-card-right">
                  {formattedDate && <span className="traitor-time-badge">{formattedDate}</span>}
                  {daysAgo !== null && (
                    <span className="traitor-time-days">
                      hace {daysAgo} {daysAgo === 1 ? 'día' : 'días'}
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};
