import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers(//функция для объединения редьюсеров и передачи их в стор. Передаём редьюсеры
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sitebar: sitebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));       //redux store

window.store = store;

export default store;

//детерменированность - если передаём одни и те же данные, то функция должна вернуть один и тот же результат