import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JobBoard from '../src/containers/JobBoard.tsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store/store.ts"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <JobBoard />
  </Provider>
);

reportWebVitals();
