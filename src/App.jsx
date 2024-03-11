import React, { useState } from 'react';
import VeniViciDisplay from "./components/VeniViciDisplay";
import BanList from './components/BanList';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [bannedAttributes, setBannedAttributes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const apiKey = 'live_sFrVrQBPiIMKEp8QJMQgVXIxhlUrVXpgmXH59RstyqVcRZeLQCaBBS15doJQZOYw';
      const filter = bannedAttributes.length > 0 ? `&weight_exclude=${bannedAttributes.join(',')}` : '';
      const response = await axios.get(`https://api.thedogapi.com/v1/images/search?${filter}`, {
        headers: {
          'x-api-key': apiKey,
        },
      });

      const jsonData = response.data[0];
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBan = (attribute) => {
    setBannedAttributes((prevBans) => [...prevBans, attribute]);
    fetchData();
  };

  return (
    <div>
      <h1>Veni Vici!</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Fetching...' : 'Discover Something New'}
      </button>
      {data && <VeniViciDisplay data={data} onBan={handleBan} />}
      <BanList bannedAttributes={bannedAttributes} />
    </div>
  );
}

export default App;
