import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let postsData = [
  { message: 'Hello React, it is my first post!)', likes: 11 },
  { message: 'AS WE CAN', likes: 21 },
  { message: 'Light weight BABYYY!!', likes: 33 },
  { message: 'No Country for Old Men!)', likes: 19 },
]
let dialogsData = [
  { id: 1, name: "Nikita" },
  { id: 2, name: "Semen" },
  { id: 3, name: "Gleb" },
  { id: 4, name: "Marianna" },
  { id: 5, name: "Sanchez" },
  { id: 6, name: "Alina" },
];

let messagesData = [
  { id: 1, txt: 'Hello!' },
  { id: 2, txt: 'How are you?!' },
  { id: 1, txt: 'Good! What about you?) What new?' },
  { id: 2, txt: "YoYoYo" },
  { id: 2, txt: "AeAeAe" },
  { id: 2, txt: "MMM NICE" },
]
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
