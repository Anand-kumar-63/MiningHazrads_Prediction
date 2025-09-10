import { useState } from 'react'
import {Routes , Route} from "react-router-dom"; 
import Navbar from './Component/Navbar/Navbar'
import Manager from './Pages/Manager/Manager';
import RegisterWorker from './Pages/RegisterWorker/RegisterWorker';
import LoginWorker from './Pages/LoginWorker/LoginWorker';
import RegisterManager from './Pages/RegisterManager/RegisterManager';
import LoginManager from './Pages/LoginManager/LoginManager';
import Contactus from './Pages/ContactUS/Contactus';
import Aboutus from './Pages/Aboutus/Aboutus';
function App() {
 return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />} />
  <Route path="/aboutus" element={<Aboutus />} />
  <Route path="/contactus" element={<Contactus />} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>Signup</h1>} />
      <Route path="/labourers" element={<h1>Labourers</h1>} />
      <Route path="/manager" element={<Manager />} />
      <Route path="/register-worker" element={<RegisterWorker />} />
      <Route path="/login-worker" element={<LoginWorker />} />
  <Route path="/register-manager" element={<RegisterManager />} />
  <Route path="/login-manager" element={<LoginManager />} />
    </Routes>
    </>
  )
}

export default App
