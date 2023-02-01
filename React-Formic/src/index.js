import React from "react";
import {createRoot} from 'react-dom/client';
import './style.css';
import App from './components/App'


const root=createRoot(document.getElementById('root'));

// const Obj=<h1 className="text-orange-700">Hi!</h1>;

root.render(<App></App>);