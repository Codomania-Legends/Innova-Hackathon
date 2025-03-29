import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Login from './Components/User/Login.jsx'
import Signup from './Components/User/Signup.jsx'
import HomePage from './Components/HomePage/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Login /> } />
      <Route path="/signup" element = { <Signup /> } />
      <Route path='/home' element = {<HomePage />} />
    </Routes>
  </BrowserRouter>
)
