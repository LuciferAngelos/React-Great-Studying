import { rerenderEntireTree } from './render';
import state from './redux/state'

rerenderEntireTree(state);       //перериросываем весь СПА при изменении страницы


