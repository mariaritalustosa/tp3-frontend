import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';

const root = createRoot(document.getElementById('root')); // Verifique se o ID "root" está correto no HTML
root.render(<App />);