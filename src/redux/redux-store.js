import { createStore, combineReducers } from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';

let reducers = combineReducers(//функция для объединения редьюсеров и передачи их в стор. Передаём редьюсеры
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sitebar: sitebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

let store = createStore(reducers);       //redux store

window.store = store;

export default store;

//детерменированность - если передаём одни и те же данные, то функция должна вернуть один и тот же результат