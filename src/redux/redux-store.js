import { createStore, combineReducers } from 'redux'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";

let reducers = combineReducers(//функция для объединения редьюсеров и передачи их в стор. Передаём редьюсеры
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sitebar: sitebarReducer
    }
)

let store = createStore(reducers);       //redux store

export default store;