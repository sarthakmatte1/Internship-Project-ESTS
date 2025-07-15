import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#343a40',
        padding: '1rem 2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ color: '#4e73df', marginRight: '0.5rem' }}>Event</span>Pro
          </Link>
          <div style={{
            display: 'flex',
            gap: '1.5rem'
          }}>
            <Link to="/" style={{ color: '#adb5bd', textDecoration: 'none' }}>Home</Link>
            <Link to="/privacy" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Privacy</Link>
            <Link to="/contact" style={{ color: '#adb5bd', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          color: '#343a40',
          fontSize: '2.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Privacy Policy</h1>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>1. Information We Collect</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            We collect personal information when you register for an account, purchase tickets, or contact us. This may include your name, email address, phone number, payment information, and event preferences.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>2. How We Use Your Information</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            Your information is used to process transactions, provide customer support, send event updates, and improve our services. We may also use aggregated data for analytics purposes.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>3. Data Security</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>4. Third-Party Services</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            We may share information with event organizers and payment processors as necessary to complete your transactions. We do not sell your personal information to third parties.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>5. Your Rights</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            You may request access to, correction of, or deletion of your personal data. You can also opt-out of marketing communications at any time.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>6. Changes to This Policy</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            We may update this policy periodically. Significant changes will be communicated through our website or via email.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#343a40',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <p style={{ marginBottom: '1rem' }}>© {new Date().getFullYear()} EventPro. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/faq" style={{ color: '#adb5bd', textDecoration: 'none' }}>FAQ</Link>
          <Link to="/terms" style={{ color: '#adb5bd', textDecoration: 'none' }}>Terms of Service</Link>
          <Link to="/contact" style={{ color: '#adb5bd', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;