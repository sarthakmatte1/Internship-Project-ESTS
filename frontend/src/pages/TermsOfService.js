import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
            <Link to="/terms" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>Terms</Link>
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
        }}>Terms of Service</h1>

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
          }}>1. Acceptance of Terms</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            By accessing or using the EventPro platform, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access the service.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>2. User Accounts</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>3. Ticket Purchases</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            All ticket sales are final unless otherwise stated. EventPro acts as an intermediary between event organizers and attendees and is not responsible for event cancellations or changes.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>4. Prohibited Conduct</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            You agree not to: (a) use the service for illegal purposes, (b) resell tickets above face value, (c) interfere with the service's operation, or (d) harass other users.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>5. Intellectual Property</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            All content on the EventPro platform, including logos and designs, is our property or licensed to us. You may not use our trademarks without express written permission.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>6. Limitation of Liability</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            EventPro is not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability is limited to the amount you paid for tickets.
          </p>

          <h2 style={{ 
            color: '#4e73df', 
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>7. Governing Law</h2>
          <p style={{ 
            color: '#6c757d',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            These Terms shall be governed by the laws of the jurisdiction where EventPro is established, without regard to its conflict of law provisions.
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
          <Link to="/privacy" style={{ color: '#adb5bd', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/contact" style={{ color: '#adb5bd', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;