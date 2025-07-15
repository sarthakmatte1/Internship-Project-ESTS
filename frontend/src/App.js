import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from'./pages/FAQ';
import TermsOfService from './pages/TermsOfService';


const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home"  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/contact" element={<ContactUs />} />\
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/" element={
          (() => {
            try {
              return <Home />;
            } catch (e) {
              console.error('Home rendering error', e);
              return <div>Home crashed</div>;
            }
          })()
        } />

      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
