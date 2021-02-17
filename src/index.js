import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SocialApp from './App';


//создали дополнительный компонет, чтобы мы могли перерисовывать каждый раз страницу при изменении свойств. Т.к., в другом случае нужно было бы импортировать из стейта в индекс и из индекса в стейт, то была бы циклическая зависимость и это не хорошо. Поэтому создали ещё 1 компоненту, которая занимается этой обработкой.


ReactDOM.render(
    <SocialApp />,
    document.getElementById('root')
);


// rerenderEntireTree(store.getState())       //отрисовали страницу

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// });       //перериросываем весь СПА при изменении страницы

serviceWorker.unregister();


