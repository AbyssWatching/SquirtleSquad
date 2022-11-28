import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import logo from '../assets/images/pokecha-logo.png'
import "../assets/css/navbar.css"

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            <img className='logo' src={logo} alt='pokecha logo'></img>
          </h1>
          
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <ul className='login'>
              <Link to="/login">Login</Link>
              </ul>
              <ul className='signup'>
              <Link to="/signup">Signup</Link>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar