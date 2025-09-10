import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Manager from "./Pages/Manager/Manager";
import RegisterWorker from "./Pages/RegisterWorker/RegisterWorker";
import LoginWorker from "./Pages/LoginWorker/LoginWorker";
import RegisterManager from "./Pages/RegisterManager/RegisterManager";
import LoginManager from "./Pages/LoginManager/LoginManager";
import Contactus from "./Pages/ContactUS/Contactus";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Labourerspage from "./Pages/Labourers/Labourers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home"
function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/labourers" element={<Labourerspage />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/login-worker" element={<LoginWorker />} />
        <Route path="/register-manager" element={<RegisterManager />} />
        <Route path="/login-manager" element={<LoginManager />} />
      </Routes>
    </>
  );
}

export default App;
