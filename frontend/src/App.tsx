import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [health, setHealth] = useState('loading...');
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_BASE_URL + '/health')
      .then(r => setHealth(JSON.stringify(r.data)))
      .catch(() => setHealth('error'));
  }, []);
  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Laughing Octo Enigma</h1>
      <p>Backend health: <code>{health}</code></p>
    </div>
  );
}
