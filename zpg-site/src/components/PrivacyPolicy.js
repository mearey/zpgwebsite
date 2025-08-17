import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: 'm5x7, monospace',
      background: '#171924',
      color: '#ffffff',
      lineHeight: 1.6,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        flex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '20px',
          background: 'rgba(0, 100, 255, 0.1)',
          border: '2px solid rgba(0, 150, 255, 0.8)',
          borderRadius: '10px',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)',
          animation: 'hologramGlow 2s ease-in-out infinite alternate'
        }}>
          <h1 style={{
            color: '#00aaff',
            fontSize: '48px',
            margin: '0 0 10px 0',
            textShadow: '0 0 10px rgba(0, 150, 255, 0.8)'
          }}>
            PRIVACY POLICY
          </h1>
          <p style={{
            color: '#ffffff',
            fontSize: '24px',
            margin: 0,
            textShadow: '0 0 5px rgba(0, 150, 255, 0.6)'
          }}>
            Zero Point Games
          </p>
        </div>
        
        <div style={{
          background: 'rgba(0, 100, 255, 0.05)',
          border: '1px solid rgba(0, 150, 255, 0.3)',
          borderRadius: '10px',
          padding: '30px',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 0 15px rgba(0, 150, 255, 0.3)'
        }}>
          <h2 style={{
            color: '#00aaff',
            fontSize: '32px',
            margin: '0 0 15px 0',
            textShadow: '0 0 8px rgba(0, 150, 255, 0.6)'
          }}>
            Data Collection
          </h2>
          <p style={{
            fontSize: '20px',
            margin: '15px 0',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            We do not collect any personal data from users visiting our website or using any of our games or services. Everything operates without any tracking mechanisms, cookies, or data collection tools.
          </p>
          
          <h2 style={{
            color: '#00aaff',
            fontSize: '32px',
            margin: '30px 0 15px 0',
            textShadow: '0 0 8px rgba(0, 150, 255, 0.6)'
          }}>
            Information We Don't Collect
          </h2>
          <p style={{
            fontSize: '20px',
            margin: '15px 0',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            We do not collect, store, or process any of the following:
          </p>
          <ul style={{
            fontSize: '20px',
            margin: '15px 0',
            paddingLeft: '30px',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            <li>Personal information (names, emails, addresses)</li>
            <li>IP addresses or location data</li>
            <li>Browsing history or website usage data</li>
            <li>Device information or technical data</li>
            <li>Cookies or tracking identifiers</li>
          </ul>
          
          <h2 style={{
            color: '#00aaff',
            fontSize: '32px',
            margin: '30px 0 15px 0',
            textShadow: '0 0 8px rgba(0, 150, 255, 0.6)'
          }}>
            Third-Party Services
          </h2>
          <p style={{
            fontSize: '20px',
            margin: '15px 0',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            Our website, games, and services do not integrate with any third-party analytics, advertising, or tracking services. We maintain a completely private experience for our users.
          </p>
          
          <h2 style={{
            color: '#00aaff',
            fontSize: '32px',
            margin: '30px 0 15px 0',
            textShadow: '0 0 8px rgba(0, 150, 255, 0.6)'
          }}>
            External Links
          </h2>
          <p style={{
            fontSize: '20px',
            margin: '15px 0',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            Our website, games, and services may contain links to external sites (such as Steam, social media platforms, etc.). We are not responsible for the privacy practices of these external websites. We encourage users to review the privacy policies of any external sites they visit.
          </p>
          
          <h2 style={{
            color: '#00aaff',
            fontSize: '32px',
            margin: '30px 0 15px 0',
            textShadow: '0 0 8px rgba(0, 150, 255, 0.6)'
          }}>
            Contact Information
          </h2>
          <p style={{
            fontSize: '20px',
            margin: '15px 0',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            If you have any questions about this privacy policy regarding our website, games, or services, you can contact us through our social media channels or Steam community pages.
          </p>
          
          <h2 style={{
            color: '#00aaff',
            fontSize: '32px',
            margin: '30px 0 15px 0',
            textShadow: '0 0 8px rgba(0, 150, 255, 0.6)'
          }}>
            Policy Updates
          </h2>
          <p style={{
            fontSize: '20px',
            margin: '15px 0',
            textShadow: '0 0 3px rgba(0, 150, 255, 0.4)'
          }}>
            This privacy policy may be updated from time to time. Any changes will be reflected on this page with an updated date.
          </p>
          
          <p style={{
            fontSize: '16px',
            color: '#888',
            marginTop: '30px',
            textAlign: 'center'
          }}>
            <em>Last updated: December 2024</em>
          </p>
          
          <a 
            href="/" 
            style={{
              display: 'inline-block',
              marginTop: '30px',
              color: '#00aaff',
              textDecoration: 'none',
              fontSize: '24px',
              padding: '10px 20px',
              border: '1px solid rgba(0, 150, 255, 0.3)',
              borderRadius: '5px',
              background: 'rgba(0, 100, 255, 0.1)',
              transition: 'all 0.3s ease',
              textShadow: '0 0 5px rgba(0, 150, 255, 0.6)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#ffffff';
              e.target.style.textShadow = '0 0 10px rgba(0, 200, 255, 1)';
              e.target.style.borderColor = 'rgba(0, 200, 255, 0.8)';
              e.target.style.background = 'rgba(0, 150, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#00aaff';
              e.target.style.textShadow = '0 0 5px rgba(0, 150, 255, 0.6)';
              e.target.style.borderColor = 'rgba(0, 150, 255, 0.3)';
              e.target.style.background = 'rgba(0, 100, 255, 0.1)';
            }}
          >
            ← Back to Zero Point Games
          </a>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        padding: '20px',
        color: '#888',
        fontSize: '16px',
        borderTop: '1px solid rgba(0, 150, 255, 0.2)',
        marginTop: '40px'
      }}>
        <p>© 2024 Zero Point Games. All rights reserved.</p>
      </div>
      
      <style>{`
        @keyframes hologramGlow {
          0% {
            box-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
          }
          100% {
            box-shadow: 0 0 30px rgba(0, 150, 255, 0.8);
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 20px 15px;
          }
          
          .header h1 {
            font-size: 36px;
          }
          
          .header p {
            font-size: 18px;
          }
          
          .content h2 {
            font-size: 24px;
          }
          
          .content p {
            font-size: 16px;
          }
          
          .back-link {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
