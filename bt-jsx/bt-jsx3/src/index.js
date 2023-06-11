import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <><div>
<img src='https://inkythuatso.com/uploads/thumbnails/800/2022/03/79d31e406fe3d3d7322b18666184911d-29-10-39-38.jpg'></img>
<p>ruma khan</p>
</div>
</>

root.render(
 element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
