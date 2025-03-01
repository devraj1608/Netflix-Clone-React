import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/images/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/images/netflix_spinner.gif'
const Login=()=> {
  const [signState,setSignState]=useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading ,setLoading] = useState(false);

  const user_auth = async(event)=>{
    event.preventDefault();
    setLoading(true); // Start loading
  
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };
  return (
    
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <>
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sign Up"?
           <input type="text" placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />:<></>}
         
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder='Email' />

          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>

          <button onClick={user_auth} type='submit' disabled={loading}>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up Now</span></p>:<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>

     <footer class="footer">
     <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>
     <div class="footer-links">
         <a href="#">FAQ</a>
         <a href="#">Help Centre</a>
         <a href="#">Terms of Use</a>
         <a href="#">Privacy</a>
         <a href="#">Cookie Preferences</a>
         <a href="#">Corporate Information</a>
     </div>
     <button class="language-btn">🌐 English ⌵</button>
   </footer>

  </>
  )
}

export default Login
