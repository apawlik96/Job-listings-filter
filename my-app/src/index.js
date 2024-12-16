import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JobBoard from '../src/containers/JobBoard.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobBoard />
  </React.StrictMode>
);

reportWebVitals();
