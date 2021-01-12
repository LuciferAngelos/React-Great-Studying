import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


//создали дополнительный компонет, чтобы мы могли перерисовывать каждый раз страницу при изменении свойств. Т.к., в другом случае нужно было бы импортировать из стейта в индекс и из индекса в стейт, то была бы циклическая зависимость и это не хорошо. Поэтому создали ещё 1 компоненту, которая занимается этой обработкой.


let rerenderEntireTree = (state) => {        //передаём state через свойства
    ReactDOM.render(

        <BrowserRouter>     {/*  обрамление (оболочка, обертка) для того, чтобы роутинг работал. */}
            <Provider store={store} >
                <App
                // state={state}
                // dispatch={store.dispatch.bind(store)}     //указываем биандом, что данный метод будет привязываться именно к объекту стор
                // store={store}
                />
            </Provider>


        </BrowserRouter >, document.getElementById('root')

    );



}

rerenderEntireTree(store.getState())       //отрисовали страницу

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// });       //перериросываем весь СПА при изменении страницы

serviceWorker.unregister();


