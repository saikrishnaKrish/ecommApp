import React from 'react'
import ReactDOM from 'react-dom/client'
import MayCompoent1 from './MayCompoent.jsx'
import './index.css'
import IuseStateHook from './hooks/IuseStateHook.jsx'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>   
  </React.StrictMode>,
)
