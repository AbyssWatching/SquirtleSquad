import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import email_icon from "../assets/images/email_icon.png"
import password_icon from "../assets/images/pass.png"


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (

    <div className="main">
      <div className="main1">
    
          <form className="signup" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
      
          <label><img src={email_icon} alt="email" className="email_icon"/></label>
          <input 
          type="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          />
          <label><img src={password_icon} alt="password" className="pass"/></label>
          <input 
          type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          />

         <button disabled={isLoading}>Sign up</button>
         {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  )
}

export default Signup