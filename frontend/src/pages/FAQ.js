import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
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
            <Link to="/faq" style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }}>FAQ</Link>
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
        }}>Frequently Asked Questions</h1>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#4e73df', marginBottom: '1rem' }}>General Questions</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              color: '#495057',
              marginBottom: '0.5rem',
              fontSize: '1.2rem'
            }}>How do I create an account?</h3>
            <p style={{ 
              color: '#6c757d',
              lineHeight: '1.6'
            }}>Click on the "Register" button in the top navigation and fill out the registration form with your details. You'll receive a confirmation email to verify your account.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              color: '#495057',
              marginBottom: '0.5rem',
              fontSize: '1.2rem'
            }}>How can I purchase tickets?</h3>
            <p style={{ 
              color: '#6c757d',
              lineHeight: '1.6'
            }}>Browse our events, select the one you're interested in, choose the number of tickets, and proceed to checkout. You can pay with credit card or PayPal.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              color: '#495057',
              marginBottom: '0.5rem',
              fontSize: '1.2rem'
            }}>Can I get a refund for my tickets?</h3>
            <p style={{ 
              color: '#6c757d',
              lineHeight: '1.6'
            }}>Refund policies vary by event. Please check the event details for specific refund information. Generally, refunds are available up to 7 days before the event.</p>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '2rem'
        }}>
          <h2 style={{ color: '#4e73df', marginBottom: '1rem' }}>Technical Support</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              color: '#495057',
              marginBottom: '0.5rem',
              fontSize: '1.2rem'
            }}>I didn't receive my tickets. What should I do?</h3>
            <p style={{ 
              color: '#6c757d',
              lineHeight: '1.6'
            }}>First, check your spam folder. If you still can't find them, contact our support team with your order number and we'll resend them.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ 
              color: '#495057',
              marginBottom: '0.5rem',
              fontSize: '1.2rem'
            }}>The website isn't working properly. How can I report this?</h3>
            <p style={{ 
              color: '#6c757d',
              lineHeight: '1.6'
            }}>Please use the "Contact Us" page to report any technical issues. Include details about your browser and device for faster resolution.</p>
          </div>
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
          <Link to="/privacy" style={{ color: '#adb5bd', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#adb5bd', textDecoration: 'none' }}>Terms of Service</Link>
          <Link to="/contact" style={{ color: '#adb5bd', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;