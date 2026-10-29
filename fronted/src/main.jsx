import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget this!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer autoClose={3000} position="top-right" />

  </StrictMode>,
)
