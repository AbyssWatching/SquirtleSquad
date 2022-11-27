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

  // const getPokecards = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/cards");
  //     const jsonData = await response.json();
  
  //     console.log(jsonData)
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }
  
  // useEffect(() => {
  //   getPokecards();
  // }, []);

  
  return (
    <div className="App">
      <Gacha />
      <Collection />
    </div>
  )

}

export default App;
