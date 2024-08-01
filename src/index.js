import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n.js'; // Import the i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.addEventListener('DOMContentLoaded', function () {
  // Function to remove Google Translate elements
  function removeGoogleTranslateElements() {
      const translateTooltip = document.querySelector('.goog-te-banner-frame');
      const translateTooltipContainer = document.querySelector('.goog-tooltip');
      const translateHighlight = document.querySelector('.goog-text-highlight');

      if (translateTooltip) translateTooltip.style.display = 'none';
      if (translateTooltipContainer) translateTooltipContainer.style.display = 'none';
      if (translateHighlight) translateHighlight.style.display = 'none';
  }

  // Initial call to remove elements
  removeGoogleTranslateElements();

  // Observer to watch for added nodes and remove them if necessary
  const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
          if (mutation.addedNodes.length) {
              removeGoogleTranslateElements();
          }
      });
  });

  // Configure the observer to watch for changes in the document
  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
});
