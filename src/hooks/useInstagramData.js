import { useState } from 'react';

export const useInstagramData = () => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [traitors, setTraitors] = useState([]);
  const [error, setError] = useState('');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const extractUsers = (data, type) => {
    const users = [];

    const getUserData = (item) => {
      let username = null;
      let timestamp = null;
      const listData = item.string_list_data && item.string_list_data[0];

      if (listData && listData.value) {
        username = listData.value;
      }
      else if (item.title) {
        username = item.title;
      }
      else if (listData && listData.href) {
        const href = listData.href;
        username = href.split('_u/')[1] || href.split('/').pop();
      }

      if (listData && listData.timestamp) {
        timestamp = listData.timestamp;
      }

      return { username, timestamp };
    };
    
    if (Array.isArray(data)) {
      data.forEach(item => {
        const userData = getUserData(item);
        if (userData.username) users.push(userData);
      });
    } 
    else if (data && data.relationships_following) {
      data.relationships_following.forEach(item => {
        const userData = getUserData(item);
        if (userData.username) users.push(userData);
      });
    } 
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

    if (!file.name.endsWith('.json')) {
      setError(`El archivo "${file.name}" no es válido. Solo se permiten archivos .json`);
      e.target.value = '';
      return;
    }

    if (type === 'followers' && file.name !== 'followers_1.json') {
      setError('Por seguridad y exactitud, debes subir exactamente el archivo "followers_1.json" en la primera casilla.');
      e.target.value = '';
      return;
    }

    if (type === 'following' && file.name !== 'following.json') {
      setError('Por seguridad y exactitud, debes subir exactamente el archivo "following.json" en la segunda casilla.');
      e.target.value = '';
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
        setTraitors([]);
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
