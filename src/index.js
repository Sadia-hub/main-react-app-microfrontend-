import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { incrementCounter } from './redux/actions';

import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps([
  {
    name:"micro-react1",
    entry:"//localhost:3001",
    container:"#subapp-viewport1",
    activeRule:"/micro-react1",
    props: {store}
  },
  {
    name:"micro-react2",
    entry:"//localhost:3002",
    container:"#subapp-viewport2",
    activeRule:"/micro-react2",
    props: {store, incrementCounter }
  }
]);



start();