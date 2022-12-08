import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "normalize.css"
import FormField from "./styles/FormField";
import Error from "./styles/Error";
import { BrowserRouter } from 'react-router-dom';

export { Error, FormField};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <BrowserRouter className="App">
          <App />
        </BrowserRouter>
   </React.StrictMode>
);

