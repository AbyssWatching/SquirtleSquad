import React, { useState, useEffect } from 'react'
import Collection from './components/Collection';
import Gacha from './components/Gacha';
// import Home from './components/Home';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
  }, []);

  return (
    <div className="App">
      <Gacha />
      <Collection />
    </div>
  )

}

export default App;
