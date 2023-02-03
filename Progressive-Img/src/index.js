import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './components/app';
// import './components/app.css';


const root=createRoot(document.getElementById('root'));

root.render(<App/>);