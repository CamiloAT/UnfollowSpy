import { useState } from 'react';

export const useInstagramData = () => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [traitors, setTraitors] = useState([]);
  const [error, setError] = useState('');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const extractUsers = (data, type) => {
    const users = [];

    // Helper interno para extraer el usuario y fecha desde los diferentes formatos
    const getUserData = (item) => {
      let username = null;
      let timestamp = null;
      const listData = item.string_list_data && item.string_list_data[0];

      // 1. Si viene explícitamente en el valor
      if (listData && listData.value) {
        username = listData.value;
      }
      // 2. Si viene como titulo
      else if (item.title) {
        username = item.title;
      }
      // 3. Fallback: extraerlo del href
      else if (listData && listData.href) {
        const href = listData.href;
        username = href.split('_u/')[1] || href.split('/').pop();
      }

      // Extraer timestamp si existe
      if (listData && listData.timestamp) {
        timestamp = listData.timestamp;
      }

      return { username, timestamp };
    };
    
    // followers_1.json format (Array directo)
    if (Array.isArray(data)) {
      data.forEach(item => {
        const userData = getUserData(item);
        if (userData.username) users.push(userData);
      });
    } 
    // following.json format
    else if (data && data.relationships_following) {
      data.relationships_following.forEach(item => {
        const userData = getUserData(item);
        if (userData.username) users.push(userData);
      });
    } 
    // Alternate followers_1.json format
    else if (data && data.relationships_followers) {
      data.relationships_followers.forEach(item => {
        const userData = getUserData(item);
        if (userData.username) users.push(userData);
      });
    } else {
      console.warn("Formato JSON no reconocido", data);
      throw new Error(`Formato JSON no reconocido para el archivo de ${type}`);
    }
    
    return users;
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    // 1. Validar que el archivo sea JSON
    if (!file.name.endsWith('.json')) {
      setError(`El archivo "${file.name}" no es válido. Solo se permiten archivos .json`);
      e.target.value = ''; // Limpiar el input
      return;
    }

    // 2. Validar nombres de archivo estrictos por seguridad
    if (type === 'followers' && file.name !== 'followers_1.json') {
      setError('Por seguridad y exactitud, debes subir exactamente el archivo "followers_1.json" en la primera casilla.');
      e.target.value = ''; // Limpiar el input
      return;
    }

    if (type === 'following' && file.name !== 'following.json') {
      setError('Por seguridad y exactitud, debes subir exactamente el archivo "following.json" en la segunda casilla.');
      e.target.value = ''; // Limpiar el input
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        const userList = extractUsers(json, type);
        
        if (type === 'followers') {
          setFollowers(userList);
        } else {
          setFollowing(userList);
        }
        setError('');
        setTraitors([]); // Reset traitors when new file is uploaded
        setHasAnalyzed(false);
      } catch (err) {
        setError('Error al leer el archivo. Asegúrate de que es el .json correcto.');
        console.error(err);
      }
    };
    reader.readAsText(file);
  };

  const calculateTraitors = () => {
    if (followers.length === 0 || following.length === 0) {
      setError('Por favor, sube ambos archivos primero.');
      return;
    }

    const followersSet = new Set(followers.map(f => f.username));
    let result = following.filter(user => !followersSet.has(user.username));

    // Ordenar alfabéticamente por defecto
    result.sort((a, b) => {
      const nameA = (a.username || '').toLowerCase();
      const nameB = (b.username || '').toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    setTraitors(result);
    setError('');
    setHasAnalyzed(true);
  };

  return {
    followers,
    following,
    traitors,
    error,
    hasAnalyzed,
    handleFileUpload,
    calculateTraitors
  };
};
