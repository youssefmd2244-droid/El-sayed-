import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register Service Worker for offline PWA support
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('Service Worker registered successfully!', reg.scope))
      .catch((err) => console.error('Service Worker registration failed: ', err));
  });
} else if ('serviceWorker' in navigator) {
  // Also register in dev mode for easy testing if needed
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('Service Worker registered in Dev!', reg.scope))
      .catch((err) => console.warn('Service Worker ignored or failed in Dev: ', err));
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
