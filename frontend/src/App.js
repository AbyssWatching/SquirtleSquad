import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'


// pages & components
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="views">
          <Routes>
            <Route 
              path="/"                                              //protect routes
              element={user ? <Home /> : <Navigate to="/login" />}  //If user exist render Home, if false send user to login
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} //if no user exist render login, if false send to home page
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} //if no user exist render login, if false send to home page
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;