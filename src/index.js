import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: '1', message: 'Hey, how are you?', likesCount: 12},
    {id: '2', message: 'Hello, i am fine', likesCount: 11},
    {id: '3', message: 'Hello, Dude', likesCount: 16}
]
let dialogs = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Sasha'},
    {id: '3', name: 'Victor'},
    {id: '4', name: 'Valera'}
]

let messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How are you IT'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'You'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
