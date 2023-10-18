import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA138M13gS5-__UOYFbzuZX5MzPRiY6mhE",
  authDomain: "e-commerce-6fbeb.firebaseapp.com",
  projectId: "e-commerce-6fbeb",
  storageBucket: "e-commerce-6fbeb.appspot.com",
  messagingSenderId: "392783254128",
  appId: "1:392783254128:web:a7f07b4528283841bc9ab5"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
