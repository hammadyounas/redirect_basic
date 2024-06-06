import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const handleRedirect = () => {
      const referrer = document.referrer;
      const destinationUrl = 'https://www.google.com';

      // Define social media domains
      const socialMediaDomains = [
        'instagram.com',
        'facebook.com',
        'tiktok.com',
        'snapchat.com',
        'reddit.com',
        'twitter.com',
        'youtube.com'
      ];

      // Check if the referrer matches any social media domain
      const shouldRedirect = socialMediaDomains.some(domain => referrer.includes(domain));

      // if (shouldRedirect) {
        // Create a hidden link and programmatically click it to open in default browser
        debugger
        const link = document.createElement('a');
        link.href = destinationUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      // }
    };

    handleRedirect();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Welcome to My Redirect App</h1>
    </div>
  );
};

export default App;
