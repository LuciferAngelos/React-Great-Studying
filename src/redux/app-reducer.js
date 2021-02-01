import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESSED = 'INITIALIZED_SUCCESSED';

let initialState = {
    initialized: false,

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESSED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESSED });
//thunk
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise]).then(() => {       //Promise.all нужно для того, чтобы, когда будет много промисов, он вызывал их. Обрабатываем массив промисов
        dispatch(setInitializedSuccess());
    })
}



export default appReducer;