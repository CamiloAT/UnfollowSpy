import { useState } from 'react';

export const useInstagramData = () => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [traitors, setTraitors] = useState([]);
  const [error, setError] = useState('');

  const extractUsers = (data, type) => {
    const users = [];

    // Helper interno para extraer el usuario desde los diferentes formatos en los que viene
    const getUsername = (item) => {
      // 1. Si viene explícitamente en el valor
      if (item.string_list_data && item.string_list_data[0] && item.string_list_data[0].value) {
        return item.string_list_data[0].value;
      }
      // 2. Si viene como titulo
      if (item.title) {
        return item.title;
      }
      // 3. Fallback: extraerlo del href (https://www.instagram.com/_u/usuario)
      if (item.string_list_data && item.string_list_data[0] && item.string_list_data[0].href) {
        const href = item.string_list_data[0].href;
        return href.split('_u/')[1] || href.split('/').pop();
      }
      return null;
    };
    
    // followers_1.json format (Array directo)
    if (Array.isArray(data)) {
      data.forEach(item => {
        const username = getUsername(item);
        if (username) users.push(username);
      });
    } 
    // following.json format
    else if (data && data.relationships_following) {
      data.relationships_following.forEach(item => {
        const username = getUsername(item);
        if (username) users.push(username);
      });
    } 
    // Alternate followers_1.json format
    else if (data && data.relationships_followers) {
      data.relationships_followers.forEach(item => {
        const username = getUsername(item);
        if (username) users.push(username);
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

    const followersSet = new Set(followers);
    const result = following.filter(user => !followersSet.has(user));
    setTraitors(result);
    setError('');
  };

  return {
    followers,
    following,
    traitors,
    error,
    handleFileUpload,
    calculateTraitors
  };
};
