import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Collection from './components/Collection' ;
import Style from './assets/App.css';




function App() {
  const title = 'Welcome to Poke-Cha'
  const backgroundPicture = new URL("./assets/images/background.png")

  return (
    <div className="App">
      <Style/>
       <Navbar />
      <h1>{ title }</h1>
      <Home/>
      <Collection/>
       <img style={{flex: 1}}src={backgroundPicture} alt="background grass "/>
    </div>
  );
}

export default App;
