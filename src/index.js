import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// No need to import static CSS files here since they are loaded in index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 