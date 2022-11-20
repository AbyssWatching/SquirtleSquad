import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  const title = 'Welcome to Poke-Cha'
  
  return (
    <div className="App">
       <Navbar />
      <h1>{ title }</h1>
      <Home/>

    </div>
  );
}

export default App;
