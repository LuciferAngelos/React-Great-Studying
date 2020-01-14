import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [     //оформляем данные в джейсон файл
    {
        id: 1,
        message: 'Hi! How are you?',
        likesCount: 120
    },
    {
        id: 2,
        message: 'Go to the KFC!',
        likesCount: 44
    },
    {
        id: 3,
        message: 'Хуллоу!',
        likesCount: 5
    },
    {
        id: 4,
        message: 'It is the first post!',
        likesCount: 1
    }
];

let dialogs = [     //оформляем данные в джейсон файл
    {
        id: 1,
        name: 'Коля'
    },
    {
        id: 1,
        name: 'Маша'
    },
    {
        id: 1,
        name: 'Катя'
    },
    {
        id: 1,
        name: 'Жорж'
    },
    {
        id: 1,
        name: 'Игнат'
    },
    {
        id: 1,
        name: 'ПеДеомитя'
    }
];

let messages = [     //оформляем данные в джейсон файл
    {
        id: 1,
        message: 'Hi!'
    },
    {
        id: 1,
        message: 'Привет'
    },
    {
        id: 1,
        message: 'Че делаешь?'
    },
    {
        id: 1,
        message: 'Куку! Как дела?'
    },
    {
        id: 1,
        message: 'Завтра гуляешь?'
    },
    {
        id: 1,
        message: 'Я видел тебя вчера...'
    }
];

ReactDOM.render(<App
    posts={posts}
    messages={messages}
    dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
