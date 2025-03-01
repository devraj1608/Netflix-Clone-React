import React, { useEffect, Suspense, lazy } from 'react'

const Home = lazy(() => import('./Pages/Home/Home'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Player = lazy(() => import('./Pages/Player/Player'));
import { Routes,Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {


  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }
      else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      </Suspense>
      
    </div>
  )
}

export default App
