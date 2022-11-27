import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection' ;
import './assets/styles.css';




function App() {
  const title = 'Welcome to Poke-Cha'
 

  return (
    <div className="App">
     
       <Navbar />
      <h1>{ title }</h1>
      <Home/>
      <Collection/>
     
    </div>
  );
}

export default App;
