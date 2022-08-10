import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);


