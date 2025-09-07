import { useState } from "react";
import { AuthProvider } from "./AuthContext.jsx";
import AppSidebar from "./AppSidebar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Manager from "./Pages/Manager/Manager";
import Labourers from "./Pages/Labourers/Labourers";
import LabourerPage from "./Pages/Labourers/LabourerPage";
import EmergencyPage from "./Pages/Labourers/EmergencyPage";
import PitImageUpload from "./Pages/PitImageUpload";
import WagesPage from "./Pages/WagesPage";
import NotificationsPage from "./Pages/NotificationsPage";
import HazardHistoryPage from "./Pages/HazardHistoryPage";
import AdminDashboard from "./Pages/AdminDashboard";
import RegisterWorker from "./Pages/RegisterWorker/RegisterWorker";
import LoginWorker from "./Pages/LoginWorker/LoginWorker";
import RegisterManager from "./Pages/RegisterManager/RegisterManager";
import LoginManager from "./Pages/LoginManager/LoginManager";
import Contactus from "./Pages/ContactUS/Contactus";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <AuthProvider>
      <AppSidebar />
      <Navbar />
      <div className="pl-0 md:pl-64 transition-all duration-300">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/signup" element={<h1>Signup</h1>} />
          <Route path="/labourers" element={<Labourers />} />
          <Route path="/labourers/:id" element={<LabourerPage />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/pit-upload" element={<PitImageUpload />} />
          <Route path="/wages" element={<WagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/hazard-history" element={<HazardHistoryPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/register-worker" element={<RegisterWorker />} />
          <Route path="/login-worker" element={<LoginWorker />} />
          <Route path="/register-manager" element={<RegisterManager />} />
          <Route path="/login-manager" element={<LoginManager />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
