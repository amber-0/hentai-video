// import React from 'react';
// // ver18の記法
// // import ReactDOM from 'react-dom/client';
// // ver17の記法
// import { render } from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // ver
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = document.getElementById('root');

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);