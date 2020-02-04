import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//создали дополнительный компонет, чтобы мы могли перерисовывать каждый раз страницу при изменении свойств. Т.к., в другом случае нужно было бы импортировать из стейта в индекс и из индекса в стейт, то была бы циклическая зависимость и это не хорошо. Поэтому создали ещё 1 компоненту, которая занимается этой обработкой.


let rerenderEntireTree = (state) => {        //передаём state через свойства
    ReactDOM.render(<App
        state={store.getState()}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
    />, document.getElementById('root'));

    serviceWorker.unregister();
}

rerenderEntireTree(store.getState())       //отрисовали страницу

store.subscribe(rerenderEntireTree);       //перериросываем весь СПА при изменении страницы


