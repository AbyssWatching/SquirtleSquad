import Navbar from './components/Navbar';
import Home from './components/Home';
import Collection from './components/Collection' ;


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
