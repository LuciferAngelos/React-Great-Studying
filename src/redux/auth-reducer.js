import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';      //такое длинное название делается для того, чтобы не было конфликтов у разработчиков в данных. Уникализация

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
//thunk
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {


    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Something went wrong"
        dispatch(stopSubmit('login', { _error: message }))      //если приходит ошибка, мы будем её обрабатывать. Для этого есть метод stopSubmit. Далее в этот метод нужно передать форму, которую мы будем стопить
    }

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;