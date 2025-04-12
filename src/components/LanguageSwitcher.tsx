import React, { useEffect } from 'react';

// Extend the window interface to include googleTranslateElementInit
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

function LanguageSwitcher() {
  useEffect(() => {
    // If script already exists, don't add it again
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ig,yo,ha',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  return <div id="google_translate_element" />;
}

export default LanguageSwitcher;
